import React from 'react';

const ToDoInputButton = ({addTodo}) => {

    return (
        <button onClick={addTodo}>Add a to do</button>
    );
};

export default ToDoInputButton;
