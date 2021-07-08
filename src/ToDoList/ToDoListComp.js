import React from 'react';
import ToDoListItem from "./ToDoListItem";

const ToDoListComp = ({todos}) => {

    return (
        <ul className="todo-list-container">
            {todos.map((todo) => (
                <ToDoListItem key={todo.id} todo={todo}/>
            ))}
            {console.log(todos)}
        </ul>
    );
};

export default ToDoListComp;
