import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo, updateTodo } from "../features/todo/todoSlice";

function Todos() {
  const dispatch = useDispatch();
  const getTodos = useSelector((state) => state.todo.todos);

  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");

  const handleEditClick = (todo) => {
    setEditId(todo.id);
    setEditText(todo.text);
  };

  const handleUpdate = (id) => {
    dispatch(updateTodo({ id, text: editText }));
    setEditId(null); // Exit edit mode
  };

  return (
    <>
      <div>Todos</div>
      <ul className="list-none">
        {getTodos.map((todo) => (
        <li
        className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
        key={todo.id}
      >
        {editId === todo.id ? (
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            className="text-black px-2 py-1 rounded"
          />
        ) : (
          <div className="text-white">{todo.text}</div>
        )}
      
        {/* Wrap buttons in a div with flex & gap-1 for tight spacing */}
        <div className="flex gap-1">
          <button
            onClick={() => dispatch(removeTodo(todo.id))}
            className="text-white bg-red-500 border-0 py-1 px-3 focus:outline-none hover:bg-red-600 rounded text-md"
          >
            🗑
          </button>
      
          {editId === todo.id ? (
            <button
              onClick={() => handleUpdate(todo.id)}
              className="text-white bg-green-500 border-0 py-1 px-3 focus:outline-none hover:bg-green-600 rounded text-md"
            >
              Save
            </button>
          ) : (
            <button
              onClick={() => handleEditClick(todo)}
              className="text-white bg-yellow-500 border-0 py-1 px-3 focus:outline-none hover:bg-yellow-600 rounded text-md"
            >
              Edit
            </button>
          )}
        </div>
      </li>
        ))}
      </ul>
    </>
  );
}

export default Todos;
