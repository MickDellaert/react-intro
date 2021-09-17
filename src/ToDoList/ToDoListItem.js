import React from 'react';

const ToDoListItem = ({todo, toggleTodo}) => {

    const handleTodoClick = () => {
        toggleTodo(todo.id)
    }

    return (
        <li className="todo-list-item my-3 p-3 overflow-hidden rounded-lg shadow-lg bg-white flex items-center">
            <input className="text-green-600 rounded-lg outline-none focus:outline-none" type="checkbox" 
                   checked={todo.complete}
                   onChange={handleTodoClick}/>
            <div className="m-3">{todo.name}</div>
        </li>
    );
};

export default ToDoListItem;