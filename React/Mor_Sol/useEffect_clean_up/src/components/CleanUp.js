import { useState, useEffect } from 'react';

function CleanUp() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    let i = 0;
    const intervalID = setInterval(() => {
      i++;
      setCounter(i);
      console.log(i);
    }, 500);
    return () => {
      clearInterval(intervalID);
      console.log('Stopped');
    };
  }, []);
  return <div>My counter = {counter}</div>;
}

export default CleanUp;
