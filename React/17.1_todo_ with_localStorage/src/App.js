import './App.css';
import React,{useState,useEffect} from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
const LOCAL_STORAGE_KEY = "react-todo-list-todos";

function App( ) {
  const [todos, setTodos] =useState([]);
  useEffect(()=> {
    const storageTodos=JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storageTodos) {
      setTodos(storageTodos);
    }
  },[]);

  useEffect(()=> {
    localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(todos));
  },[todos]);  
  
  function addTodo(todo) {
    setTodos([todo,...todos]);
  }
  function checkComplete(id) {
    setTodos(
      todos.map(todo => {
        if (todo.id===id) {
          return {
            ...todo,
            completed: !todo.completed
          };
        } 
        return todo;
      })
    );
  }
  function removeTodo(id) {
    setTodos(todos.filter(todo => todo.id !==id));
  }
  return (
    <div className="App">
      <header className="App-header">
        <h2>React Todo</h2>
        <TodoForm addTodo={addTodo}/>
      </header>
      <TodoList todos={todos} 
        checkComplete={checkComplete}
        removeTodo={removeTodo}/>
    </div>
  )
}

export default App;
