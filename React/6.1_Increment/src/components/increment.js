import React from 'react';

function ButtonIncrement() {
  const [count, setCount] = React.useState(0);

    return (
        <div>
         <div>Click to count</div>
            <button type="button" onClick={() => setCount(count + 1)}> 
                {count}
            </button>
        </div>
        );
}

export default ButtonIncrement;
