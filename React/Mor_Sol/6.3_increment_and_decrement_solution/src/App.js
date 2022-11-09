import React, { useState } from 'react';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);
  const handleClick = ({ target }) => {
    const addToCounter = target.textContent === 'Increment' ? 1 : -1;
    const futureCounter = counter + addToCounter;
    if (futureCounter <= 10 && futureCounter >= -10) {
      setCounter((prevState) => prevState + addToCounter);
    }
  };

  const setColorClass = (counterVal) => {
    if (counterVal > 0) {
      return 'green';
    } else if (counterVal < 0) {
      return 'red';
    } else {
      return 'black';
    }
  };
  return (
    <div className='App'>
      {/* //* Class */}
      {/* <label className={setColorClass(counter)}>{counter}</label> */}
      {/* //* Inline style  */}
      <label style={{ color: setColorClass(counter) }}>{counter}</label>
      <button onClick={handleClick} text={'Increment'}>
        Increment
      </button>
      <button onClick={handleClick} text={'Decrement'}>
        Decrement
      </button>
    </div>
  );
}

export default App;
