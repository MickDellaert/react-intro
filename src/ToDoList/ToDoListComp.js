import React from 'react';
import ToDoListItem from "./ToDoListItem";

const ToDoListComp = ({todos, setTodos}) => {

    const toggleTodo = (id) => {
        let toggleTodos = JSON.parse(JSON.stringify(todos));
        let todo = toggleTodos.find(todo => todo.id === id);
        todo.complete = !todo.complete;
        setTodos(toggleTodos);
    }

    return (
        <ul className="todo-list-container">
            <div>To Do: {todos.filter(todo => !todo.complete).length} Completed: {todos.filter(todo => todo.complete).length}
            </div>

            {todos.map((todo) => (
                <ToDoListItem key={todo.id} toggleTodo={toggleTodo} todo={todo}/>
            ))}
        </ul>
    );
};

export default ToDoListComp;
