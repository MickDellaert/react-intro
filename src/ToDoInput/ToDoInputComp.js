import React, {useRef} from 'react';

import ToDoInputButton from "./ToDoInputButton";
import ToDoInputField from "./ToDoInputField";

const ToDoInputComp = ({todos, setTodos}) => {

    const inputRef = useRef();
    const addTodo = () => {

        // Adding a new to do from the inputfield using the useRef hook
        let newTodo = inputRef.current.value

        // First making a clone and adding a new to do to the new state, still need to change the key so it's a unique value TODO
        let newTodos = [...todos, {id: 4, name: newTodo, complete: false}]

        // Not sure if I am making a clone in a good way here, also not sure about the JSON.parse TODO
        // let parseTodos = JSON.parse(JSON.stringify(newTodos));
        // newTodos.push({id: 4, name: newTodo.value, complete: false})

        setTodos(newTodos)
        }


    // Got stuck here for a very long time, just trying to access the addTodo function from the onClick inside the ToDoInputButton child component and displaying a console.log message, turns out it was because of the return in here, the parent, being wrapped inside a form tag. Replacing it by a regular div made it work. Need to look into this TODO
    return (
        <div className="todo-form-container">
        <div>
            <ToDoInputField inputRef={inputRef}/>
            <ToDoInputButton addTodo={addTodo}/>
        </div>
        </div>
    );
};

export default ToDoInputComp;
