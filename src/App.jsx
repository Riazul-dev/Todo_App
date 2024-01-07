import React, { useState, useEffect } from "react";
import { TodoProvider } from "./CONTEXTS";
import { TodoForm, TodoItem } from "./COMPONENTS";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
  };
  const updateTodo = (id, todo) => {
    setTodos((prev) =>
      prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo))
    );
  };
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };
  const toggleTodo = (id) => {
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id
          ? { ...prevTodo, completed: !prevTodo.completed }
          : prevTodo
      )
    );
  };

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoProvider
      value={{ todos, addTodo, updateTodo, deleteTodo, toggleTodo }}
    >
      <div className="min-h-screen bg-gray-600 text-white px-4">
        <h1 className="text-6xl font-semibold text-green-600 text-center py-8">
          Todo App
        </h1>
        <div>
          <TodoForm />
        </div>
        {todos.map((todo) => (
          <div key={todo.id}>
            <TodoItem todo={todo} />
          </div>
        ))}
      </div>
    </TodoProvider>
  );
}

export default App;
