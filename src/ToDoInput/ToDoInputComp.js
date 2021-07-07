import React from 'react';

import ToDoInputField from "./ToDoInputField";
import ToDoInputButton from "./ToDoInputButton";

const ToDoInputComp = () => {
    return (
        <form className="inputForm">
        <div>
            <ToDoInputField/>
            <ToDoInputButton/>
        </div>
        </form>
    );
};

export default ToDoInputComp;
