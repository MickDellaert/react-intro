import React from 'react';

const ToDoInputField = ({inputRef}) => {
    return (
        <input className="w-full h-10 px-3 mb-2 text-base text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline" 
            ref={inputRef}
            type="text"
            name="to-do-input"
            placeholder="Type a new to do"
        />
    );
};

export default ToDoInputField;


