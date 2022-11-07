import React from 'react';
import '../App.css';

function ButtonIncDec() {
    const [inc, setCount] = React.useState(0);
    const increment = () => {
        if (inc < 10) {
            setCount(inc + 1);
        }
    }
    const decrement = () => {
        if (inc > -10) {
            setCount(inc - 1);
        }
    }
    const color = inc > 0 ? 'green' : inc < 0 ? 'red' : 'black';

    return (
        <div className="App">
            <button onClick={increment}>+</button>
            <label style={{ color: color }}>{inc}</label>
            <button onClick={decrement}>-</button>
            </div>
    );
}

export default ButtonIncDec;
