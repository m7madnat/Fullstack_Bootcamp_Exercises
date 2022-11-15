import React from 'react';
import Son from './Son';

function Father(props) {
  return (
    <div className='father'>
      Father
      {props.children}
    </div>
  );
}

export default Father;
