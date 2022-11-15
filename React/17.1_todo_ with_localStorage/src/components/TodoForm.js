import React,{useState} from 'react'
import './style.css';

function TodoForm({addTodo}) {
    const [todo, setTodo] = useState({
        id: "",
        task: "",
        completed: false
    });
    function handleTaskInputChange(e) {
        setTodo({...todo,task:e.target.value});
    }
    function handleSubmit(e){
        e.preventDefault();
        if (todo.task.trim()) {
            addTodo({...todo,
                id:Math.floor(Math.random()*10000)}); 
            setTodo({...todo,task:""});
        }
    }

    return (
        <div className="todo-form">
            <form onSubmit={handleSubmit}>
                <input
                name="task"
                type="text"
                value={todo.task}
                onChange={handleTaskInputChange}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
        
    )
}
export default TodoForm;
