import React, { useState } from 'react';
import './App.css';
function App() {
  const [isVisitable, setIsVisible] = useState(true);
  const handleClick = () => {
    setIsVisible((prevState) => !prevState);
  };
  return (
    <div className='App'>
      <button onClick={handleClick}>Show / Hide</button>
      {/* //? Inline style ↓*/}
      {/* <div className='box' style={{ backgroundColor: isVisitable ? 'yellow' : 'transparent' }} /> */}
      {/* //? Adding class ↓*/}
      {/* <div className={`box ${isVisitable && 'yellow'}`} /> */}
      {/* //? Logical operator ↓*/}
      {isVisitable && <div className={`box ${isVisitable && 'yellow'}`} />}
    </div>
  );
}

export default App;
