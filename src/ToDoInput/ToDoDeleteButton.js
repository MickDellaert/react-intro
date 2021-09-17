import React from 'react';

const ToDoDeleteButton = ({deleteTodo}) => {

    return (
        <button className="h-10 px-5 w-full sm:w-auto md:mr-0 text-sm text-white transition-colors duration-150 bg-red-500 
        rounded-full focus:shadow-outline hover:bg-red-600" onClick={deleteTodo}>Clear completed</button>
    );
};

export default ToDoDeleteButton;