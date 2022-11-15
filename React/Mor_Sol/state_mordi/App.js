import React, { useState } from 'react';
import './App.css';

function Screen(props) {
  return <h3>{props.text}</h3>;
}

function App() {
  let [stateName, setStateName] = useState('Hola amigos');

  // let [counter, setCounter] = useState(785);

  // let str = 'Hola amigos';

  const clickHandler = () => {
    console.log(stateName);
    setStateName('Hola amichis');
    console.log(stateName);
    // counter = 785;
    // setCounter(counter + 1);
    // setCounter(counter + 1);
    // console.log(str);
    // str += ' y senoras';
    // console.log(str);
  };

  return (
    <div className='App'>
      <h1>State</h1>
      <button onClick={clickHandler}>Click</button>
      <Screen text={stateName} />
      {/* <h2>{counter}</h2> */}
    </div>
  );
}

export default App;

// ! Big no no ↓
// const app = document.querySelector('.App');
// add.addEventListener('click', clickHandler);

//! State is Asynchronous (like)

//! Props or state has changed

//? 1. “Attribute” props
//* You use props.something in a child component to display whatever you include INSIDE the tag of the Parent component.
//? 2. props.children
//* You use props.children on a component which acts as a container and does not know about their children ahead of time.
//* Basically props.children used to display whatever you include Between the opening and closing tags of the "containing" component when invoking it.
//!Contributed by Andrey ↑
