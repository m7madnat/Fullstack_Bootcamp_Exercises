import React from 'react';

function Button(props) {
  return (
    <button style={{ fontWeight: props.buttonText === 'Important' && 'bold' }}>
      {props.buttonText}
    </button>
  );
}

export default Button;
