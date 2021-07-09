import {useState} from "react";

import Header from "./Header";
import ToDoInputComp from "./ToDoInput/ToDoInputComp";
import ToDoListComp from "./ToDoList/ToDoListComp";

const App = () => {

    const initialTodos = [
        { id: 1, name: "My first todo", complete: true},
        {id: 2, name: "My second todo", complete: false},
        {id: 3, name: "My third todo", complete: false}

    ];

    const [todos, setTodos] = useState(initialTodos);

    return (
        <div className="App">
            <Header/>
            <div className="content">
                <ToDoInputComp todos={todos} setTodos={setTodos}/>
                <ToDoListComp todos={todos} setTodos={setTodos}/>
            </div>

        </div>
    );
}

export default App;
