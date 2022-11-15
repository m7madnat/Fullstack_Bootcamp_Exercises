import { useState, useEffect } from 'react';
import Box from './Box';
import CleanUp from './CleanUp';

// import { useEffect, useState } from 'react';
const App = ({ myProp }) => {
  const [style, setStyle] = useState('black');
  //! The callback in the useEffect cannot be async

  // useEffect(() => {
  //   console.log('useEffect');
  //   //?  Called at initial render
  //   //?  Called after every render
  // });
  // useEffect(() => {
  //   console.log('useEffect');
  //   //?  Called at initial render
  //   //?  Called if the specified state / props has change
  // }, [myProp]);
  // useEffect(() => {
  //   console.log('useEffect');
  //   setTimeout(() => {
  //     setStyle('red');
  //   }, 2000);
  //   //?  Called ONLY at initial render
  // }, []);
  const [display, setDisplay] = useState(false);
  return (
    <h1>
      <button
        onClick={() => {
          setDisplay((prev) => !prev);
        }}
      >
        toggle
      </button>
      {/* {display && <Box />} */}
      {display && <CleanUp />}
      {/* <div style={{ backgroundColor: style }}>App</div> */}
    </h1>
  );
};

export default App;
