import React, { useState } from 'react';

function Counter() {
  const [value, setValue] = useState(0);

  const handleClick = () => {
    setValue((prevState) => prevState + 1);
  };
  return (
    <div>
      <button onClick={handleClick}>Increment</button>
      {value}
    </div>
  );
}

export default Counter;
