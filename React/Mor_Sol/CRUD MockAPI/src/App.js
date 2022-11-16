import React, { useState, useEffect, useReducer } from 'react';
import axios from 'axios';
import './App.css';
//! useReducer ????
//https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/433.jpg
function App() {
  // localStorage.taskArr ? JSON.parse(localStorage.taskArr) : []
  const [taskArr, setTaskArr] = useState([]);
  const [inputVal, setInputVal] = useState('');
  const [inputImg, setInputImg] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMes, setErrorMes] = useState(null);

  useEffect(() => {
    //? Read
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const { data } = await axios.get('https://605b218e27f0050017c063ab.mockapi.io/todos');
        setTaskArr(data);
        setIsLoading(false);
      } catch (e) {
        setErrorMes(e.message);
        setTimeout(() => {
          setErrorMes(null);
        }, 1500);
      }
    };
    fetchData();
  }, []);

  const handleAddTask = async () => {
    if (inputVal.trim()) {
      try {
        setIsLoading(true);
        const { data } = await axios.post('https://605b218e27f0050017c063ab.mockapi.io/todos', {
          task: inputVal,
          img: inputImg,
          done: false,
        });
        setTaskArr((prev) => [...prev, data]);
        setInputVal('');
        setInputImg('');
        setIsLoading(false);
      } catch (e) {
        setErrorMes(e.message);
      }
    }
  };

  //! update localStorage
  //? Update
  const handleUpdate = async (id, oldDone) => {
    try {
      setIsLoading(true);
      const { data } = await axios.put(`https://605b218e27f0050017c063ab.mockapi.io/todos/${id}`, {
        done: !oldDone,
      });
      setTaskArr((prev) => {
        return prev.map((task) => {
          if (task.id !== id) {
            return task;
          } else {
            return data;
          }
        });
      });
      setIsLoading(false);
    } catch (e) {
      setErrorMes(e.message);
      setTimeout(() => {
        setErrorMes(null);
      }, 1500);
    }
  };

  //! update localStorage
  //? Delete
  const handleDelete = async (id) => {
    try {
      const { data } = await axios.delete(
        `https://605b218e27f0050017c063ab.mockapi.io/todos/${id}`
      );
      console.log(data);
      setTaskArr((prevState) =>
        prevState.filter((task) => {
          return task.id !== data.id;
        })
      );
    } catch (e) {
      setErrorMes(e.message);
      setTimeout(() => {
        setErrorMes(null);
      }, 1500);
    }
  };

  return (
    <div className='App'>
      <h1>Todo</h1>
      {errorMes && <h2>{errorMes}</h2>}
      <input
        value={inputVal}
        placeholder='Task'
        onChange={({ target: { value } }) => setInputVal(value)}
      />
      <input
        value={inputImg}
        placeholder='Image'
        onChange={({ target: { value } }) => setInputImg(value)}
      />
      <button onClick={handleAddTask}>Add Task</button>
      {/* //? Read */}

      {isLoading && <h1 className='spinner'>Spinner O</h1>}
      {setTaskArr.length && (
        <div className='todos_container'>
          {taskArr.map(({ task, id, img, done }, mapIndex) => (
            <div className='todo' key={id}>
              <h3
                onClick={() => {
                  handleUpdate(id, done);
                }}
              >
                {task} - {done ? 'V' : 'X'}
              </h3>
              <img src={img} alt={task} />
              <button
                onClick={() => {
                  handleDelete(id);
                }}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
