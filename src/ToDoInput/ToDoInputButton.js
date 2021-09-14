import React from 'react';

const ToDoInputButton = ({addTodo}) => {

    return (
        <button className="h-8 px-4 m-2 text-sm text-white transition-colors duration-150 bg-blue-700 rounded-full focus:shadow-outline hover:bg-blue-700" onClick={addTodo}>Add a to do</button>
    );
};

export default ToDoInputButton;
