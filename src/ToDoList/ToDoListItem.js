import React from 'react';

const ToDoListItem = ({todo}) => {

    return (
        <li className="todo-list-item">
            <input type="checkbox" checked={todo.complete}/>
            {todo.name}
        </li>
    );
};

export default ToDoListItem;