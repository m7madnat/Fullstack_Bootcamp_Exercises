import { useEffect, useState } from 'react';

// Cars need to call an API
function Cars({ car }) {
  const [apiData, setApiData] = useState(null);
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);
  //! 2 ↓ sideEffect
  //   useEffect(() => {
  //     console.log('useEffect');
  //     //?  Called at initial render
  //     //?  Called after every render
  //   });
  //   useEffect(() => {
  //     console.log('useEffect');
  //     //?  Called at initial render
  //     //?  Called if the specified state / props has change
  //   }, [counter]);
  useEffect(() => {
    console.log('useEffect');
    //?  Called ONLY at initial render
    setTimeout(() => {
      setApiData('Got the data');
    }, 3000);
  }, []);

  //! 1 ↓ render
  return (
    <div>
      {console.log('JSX')}
      <button
        onClick={() => {
          setCounter((prev) => ++prev);
        }}
      >
        counter1 {counter}
      </button>
      <button
        onClick={() => {
          setCounter2((prev) => ++prev);
        }}
      >
        counter2 {counter2}
      </button>

      {!apiData && <h1>Spinner</h1>}
      {apiData && <h1>apiData</h1>}
    </div>
  );
}

export default Cars;

// useEffect(() => {
//     console.log('useEffect');
//   });
