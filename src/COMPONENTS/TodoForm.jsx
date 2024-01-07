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
      <form
        onSubmit={add}
        className="flex rounded overflow-hidden mx-auto max-w-lg"
      >
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          className="w-full p-2 outline-none text-orange-600 text-xl tracking-wider placeholder:text-orange-700/60"
          placeholder="Write Todo..."
        />
        <button className="bg-green-600 shrink-0 py-2 px-3 tracking-wide text-2xl hover:bg-green-500 duration-200">
          Add
        </button>
      </form>
    </>
  );
}

export default TodoForm;
