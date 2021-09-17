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
        <ul className="todo-list-container flex flex-col lg:mx-44 px-4 md:px-16 lg:px-16 bg-green-200 rounded-xl pt-6 pb-12 my-8 xl:mt-8 xl:mb-16 ">
            <div className="flex justify-center md:justify-end text-green-600">
                <div className="mr-2">To Do: {todos.filter(todo => !todo.complete).length} </div>
                <div>Completed: {todos.filter(todo => todo.complete).length}</div>
            </div>

            {todos.map((todo) => (
                <ToDoListItem key={todo.id} toggleTodo={toggleTodo} todo={todo}/>
            ))}
        </ul>
    );
};

export default ToDoListComp;
