import './App.css';
import Header from "./Header";
import ToDoInputComp from "./ToDoInput/ToDoInputComp";
import ToDoListComp from "./ToDoList/ToDoListComp";

function App() {
    return (
        <div className="App">
            <Header/>
            <div className="content">
                <ToDoInputComp/>
                <ToDoListComp/>
            </div>
        </div>
    );
}

export default App;
