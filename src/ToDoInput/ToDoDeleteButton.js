import React from 'react';

const ToDoDeleteButton = ({deleteTodo}) => {

    return (
        <button onClick={deleteTodo}>Clear completed</button>
    );
};

export default ToDoDeleteButton;