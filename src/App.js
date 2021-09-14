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
        if (storeditems) setTodos (storeditems)
    }, [])


    useEffect(() => {
        window.localStorage.setItem(LSKEY + ".todos", JSON.stringify(todos));
    }, [todos]);

    return (

        <div className="container mx-auto xl:mt-8 xl:mb-64 max-w-screen-xl bg-white rounded-xl shadow-lg flex flex-col">
            <Header/>
            <div className="content bg-green-50 h-screen rounded-xl overflow-y-auto">
                <ToDoInputComp todos={todos} setTodos={setTodos}/>
                <ToDoListComp todos={todos} setTodos={setTodos}/>
            </div>

        </div>
    );
}

export default App;
