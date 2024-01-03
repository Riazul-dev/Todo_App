import React, { useState } from "react";
import { useTodo } from "../CONTEXTS";

function TodoForm() {
  const [todo, setTodo] = useState("");
  const { addTodo } = useTodo();
  const add = (e) => {
    e.preventDefault();
    if (!todo) return;
    addTodo({ todo, completed: false });
    setTodo("");
  };

  return (
    <>
      <form onSubmit={add} className="flex rounded overflow-hidden mx-8">
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          className="w-full p-2 outline-none text-orange-600 text-xl tracking-wider placeholder:text-orange-700/60"
          placeholder="Write Todo..."
        />
        <button
          className="bg-green-500 shrink-0 p-2 tracking-wide text-xl"
        >
          Add Todo
        </button>
      </form>
    </>
  );
}

export default TodoForm;
