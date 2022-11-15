import React from 'react';
import './style.css';

function Todo({todo, checkComplete, removeTodo}) {
    function handleCheckboxClick() {
        checkComplete(todo.id);        
    }
    function handleRemoveClick() {
        removeTodo(todo.id);
    }
    return (
        <li className="todo-div">            
            <input className="checkbox-custom" type="checkbox" onClick={handleCheckboxClick}></input>
            <p style={{textDecoration: todo.completed ? 'line-through' : null}}>{todo.task}</p>
            <button onClick={handleRemoveClick}>X</button>
        </li>       
    );
}

export default Todo;
