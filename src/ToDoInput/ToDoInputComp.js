import React, {useRef} from 'react';
import { v4 as uuid4 } from 'uuid';

import ToDoInputButton from "./ToDoInputButton";
import ToDoInputField from "./ToDoInputField";
import ToDoDeleteButton from "./ToDoDeleteButton";

const ToDoInputComp = ({todos, setTodos}) => {

    const inputRef = useRef();
    const addTodo = () => {

        // Adding a new to do from the inputfield using the useRef hook
        let newTodo = inputRef.current.value;

        // Clear inputfield
        if (newTodo === '') return;
        inputRef.current.value = null;

        // First making a clone and adding a new to do to the new state, still need to change the key so it's a unique value TODO
        let newTodos = JSON.parse(JSON.stringify(todos))
        setTodos([...newTodos, {id: uuid4(), name: newTodo, complete: false}])

        // Not sure if I am making a clone in a good way here, also not sure about the JSON.parse TODO
        // let parseTodos = JSON.parse(JSON.stringify(newTodos));
        // newTodos.push({id: 4, name: newTodo.value, complete: false})
        }


    const deleteTodo = () => {
        let deleteTodos = todos.filter(todo => !todo.complete);
        setTodos(deleteTodos);
    }


    // Got stuck here for a very long time, trying to access the addTodo function from the onClick inside the ToDoInputButton child component and displaying a console.log message, turns out it was because of the return in here, the parent, being wrapped inside a form tag. Replacing it by a regular div made it work. Need to look into this TODO
    return (
        <div className="todo-form-container my-8 lg:mx-44 md:px-16 lg:px-0 xl:px-0 flex flex-col justify-items-center sm:flex-row justify-between">
            <div className="mx-3 md:mx-0">
            <ToDoInputField inputRef={inputRef}/>
            </div>
            <div className="mx-auto sm:mx-0">
            <ToDoInputButton addTodo={addTodo}/>
            <ToDoDeleteButton deleteTodo={deleteTodo}/>
            </div>
        </div>
    );
};

export default ToDoInputComp;
