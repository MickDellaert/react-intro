import React from "react";

const ToDoInputField = ({ inputRef }) => {
  return (
    <input
      className="w-full md:w-full h-10 text-base bg-green-200 border-0 text-gray-700 placeholder-gray-600  text-center rounded-full shadow-inner focus:shadow-outline"
      ref={inputRef}
      type="text"
      name="to-do-input"
      placeholder="Type a new todo"
    />
  );
};

export default ToDoInputField;
