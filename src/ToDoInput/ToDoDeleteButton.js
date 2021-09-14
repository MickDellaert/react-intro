import React from 'react';

const ToDoDeleteButton = ({deleteTodo}) => {

    return (
        <button className="h-8 px-4 m-2 text-sm text-white transition-colors duration-150 bg-red-500 rounded-full focus:shadow-outline hover:bg-red-700" onClick={deleteTodo}>Clear completed</button>
    );
};

export default ToDoDeleteButton;