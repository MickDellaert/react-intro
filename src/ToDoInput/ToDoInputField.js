import React from 'react';

const ToDoInputField = ({inputRef}) => {
    return (
        <input
            ref={inputRef}
            type="text"
            name="to-do-input"
            placeholder="Type a new to do"
        />
    );
};

export default ToDoInputField;


