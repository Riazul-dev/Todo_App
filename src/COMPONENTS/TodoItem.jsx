import React, { useState } from "react";
import { useTodo } from "../CONTEXTS";
import { GrEdit } from "react-icons/gr";
import { IoSaveOutline } from "react-icons/io5";
import { RiDeleteBin5Line } from "react-icons/ri";

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
    <div className="flex gap-2 bg-gray-800/40 p-4 w-full max-w-lg mx-auto mt-3 rounded shadow-md shadow-orange-300/20">
      <input
        onChange={toggle}
        className="shrink-0 cursor-pointer"
        type="checkbox"
        checked={todo.completed}
      />
      <input
        onChange={(e) => setTodoMsg(e.target.value)}
        value={todoMsg}
        readOnly={!isEditable || todo.completed}
        className={`w-full outline-none text-orange-500 ${
          todo.completed && "line-through"
        } ${
          isEditable && "ring-1 ring-orange-300 bg-slate-100/90"
        } px-2 py-1 rounded text-2xl tracking-wide`}
        type="text"
      />
      <div className="shrink-0 flex gap-2">
        <button
          className="p-2 border bg-gray-300 rounded hover:bg-gray-50 duration-200"
          onClick={() => {
            if (todo.completed) return;
            if (isEditable) {
              editTodo();
            } else setIsEditable((prev) => !prev);
          }}
          disabled={todo.completed}
          type="button"
        >
          {isEditable ? (
            <IoSaveOutline className="text-yellow-800 text-xl" />
          ) : (
            <GrEdit className="text-green-700 text-xl" />
          )}
        </button>
        <button
          className="p-2 border bg-gray-300 rounded hover:bg-gray-50 duration-200"
          onClick={() => deleteTodo(todo.id)}
          type="button"
        >
          <RiDeleteBin5Line className="text-red-700 text-xl" />
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
