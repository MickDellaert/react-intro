import React, {useRef} from 'react';

import ToDoInputButton from "./ToDoInputButton";
import ToDoInputField from "./ToDoInputField";

const ToDoInputComp = () => {

    const inputRef = useRef();
    const addTodo = () => {
        const newToDo = inputRef.current.value;

        {console.log('goodmorning yall!')};
        {console.log(newToDo)}

    }

    // Got stuck here for a very long time, just trying to access the addTodo function from the onClick inside the ToDoInputButton child component and displaying a console.log message, turns out it was because of the return in here, the parent, being wrapped inside a form tag. Replacing it by a regular div made it work. What gives, React? Need to look into this TODO
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
