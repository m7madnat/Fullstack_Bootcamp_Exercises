import React from 'react';
import Button from './Button';
import './App.css';
import Father from './components/Father';
import Son from './components/Son';
function App() {
  return (
    <div className='My_App'>
      {/* <Father color='red'>
        <h3>Hola amigos</h3>
      </Father> */}
      <Father color='red'>
        <h3>Hola amigos</h3>
      </Father>
    </div>
  );
}

export default App;

//! Component
//? Component let you split the UI into independent, reusable pieces. each piece in isolation.

//? React component its a function that return a JSX, and create ReactElement

//? To insert JS statements into JSX use {}

//! What is props? properties

//? props object is immutable
//! props is a read only object

//! Above 2-3 steps down === props drilling
//! props drilling NO GOOD
