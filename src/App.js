import {useState, useEffect} from "react";

import Header from "./Header";
import ToDoInputComp from "./ToDoInput/ToDoInputComp";
import ToDoListComp from "./ToDoList/ToDoListComp";

const LSKEY = 'MyTodoApp'

const App = () => {

    const initialTodos = [
        {id: 1, name: "My first todo", complete: true},
        {id: 2, name: "My second todo", complete: false},
        {id: 3, name: "My third todo", complete: false}
    ];

    const [todos, setTodos] = useState(initialTodos);

    useEffect(()=> {
        const storeditems = JSON.parse(localStorage.getItem(LSKEY + ".todos"))
        if (storeditems) setTodos(storeditems)
    }, [])


    useEffect(() => {
        window.localStorage.setItem(LSKEY + ".todos", JSON.stringify(todos));
    }, [todos]);

    return (

        <div className="App">
            <Header/>
            <div className="content">
                <ToDoInputComp todos={todos} setTodos={setTodos}/>
                <ToDoListComp todos={todos} setTodos={setTodos}/>
                <ToDoListComp todos={todos} setTodos={setTodos}/>
            </div>

        </div>
    );
}

export default App;
