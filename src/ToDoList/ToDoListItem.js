import React from 'react';

const ToDoListItem = ({todo, toggleTodo}) => {

    const handleTodoClick = () => {
        toggleTodo(todo.id)
    }

    return (
        <li className="todo-list-item">
            <input type="checkbox"
                   checked={todo.complete}
                   onChange={handleTodoClick}/>
            {todo.name}
        </li>
    );
};

export default ToDoListItem;