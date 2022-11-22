// import React, { useContext } from 'react';
// import { titleContext } from '../providers/TitleProvider';

import { useTitleContext } from '../providers/TitleProvider';

export default function Box2() {
  //   const { myState, setMyState } = useContext(titleContext);
  const [myState, setMyState] = useTitleContext();

  const handleChange = () => {
    setMyState('Hello');
  };

  return (
    <div>
      Box2
      <h1>{myState}</h1>
      <button onClick={handleChange}>Change text</button>
    </div>
  );
}
