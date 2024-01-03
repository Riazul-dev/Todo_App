import React, { useState } from "react";
import { useTodo } from "../CONTEXTS";

function TodoItem({ todo }) {
  const [isEditable, setIsEditable] = useState(false);
  const [todoMsg, setTodoMsg] = useState(todo.todo);
  const { updateTodo, deleteTodo, toggleTodo } = useTodo();
  const editTodo = () => {
    updateTodo(todo.id, { ...todo, todo: todoMsg });
    setIsEditable(false);
  };
  const toggle = () => {
    toggleTodo(todo.id);
  };
  return (
    <div className="flex gap-2 bg-gray-700 p-4 w-full max-w-[70vw] mx-auto mt-3 rounded">
      <input
        onChange={toggle}
        className="shrink-0"
        type="checkbox"
        checked={todo.completed}
      />
      <input
        onChange={(e) => setTodoMsg(e.target.value)}
        value={todoMsg}
        readOnly={!isEditable}
        className="w-full outline-none text-orange-500"
        type="text"
      />
      <div className="shrink-0 flex gap-2">
        <button
          className="p-1 border bg-green-500"
          onClick={() => {
            if (todo.completed) return;
            if (isEditable) {
              editTodo();
            } else setIsEditable((prev) => !prev);
          }}
          disabled={todo.completed}
          type="button"
        >
          {isEditable ? "Save" : "Edit"}
        </button>
        <button
          className="p-1 border bg-green-500"
          onClick={() => deleteTodo(todo.id)}
          type="button"
        >
          Del
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
