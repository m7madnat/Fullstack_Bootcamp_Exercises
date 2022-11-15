import React from 'react';
import Todo from './Todo';
import './style.css';

function TodoList({todos,checkComplete,removeTodo}) {
    return (
        <ul className="todo-list" style={{ visibility: todos.length ? "visible" : "hidden" }}>
            {todos.map(todo => (
                <Todo key={todo.id}
                    todo={todo} 
                    checkComplete={checkComplete}
                    removeTodo={removeTodo}/> 
            ))}
        </ul>
    );
}

export default TodoList;