import React from "react";

const ToDoInputButton = ({ addTodo }) => {
  return (
    <button
      className="h-10 px-5 w-full sm:w-auto text-sm text-white transition-colors duration-150 bg-yellow-500 
      rounded-full focus:shadow-outline hover:bg-yellow-600"
      onClick={addTodo}
    >
      Add todo
    </button>
  );
};

export default ToDoInputButton;
