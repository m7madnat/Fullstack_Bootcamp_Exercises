import React from "react";
import './App.css';
import Todo from './components/Todo';

const DATA =
[
    { name: "CSS", completed: true },
    { name: "JavaScript", completed: true },
    { name: "Learn React", completed: false },
    { name: "Learn mongoDB", completed: false },
    { name: "Learn Node JS", completed: false },
]
    

function App() {
    return (
        <div className="App">
            <h1>Todo List</h1>
            <div>
                {DATA.map((todo) => (
                    <Todo title={todo.name} isComplete={todo.completed} />
                ))} 
            </div>         
        </div>
    );
}

export default App;