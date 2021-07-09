import React from 'react';
import ToDoListItem from "./ToDoListItem";

const ToDoListComp = ({todos, setTodos}) => {

    return (
        <ul className="todo-list-container">
            {todos.map((todo) => (
                <ToDoListItem key={todo.id} todo={todo}/>
            ))}
        </ul>
    );
};

export default ToDoListComp;
