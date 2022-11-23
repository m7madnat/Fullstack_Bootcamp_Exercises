import React from "react";
import Calc from "./Calc";

function Numbers() {
  const { number, addOne, removeOne, double, divide } = Calc(0);
  return (
    <div>
      Numbers to Calculator
        <div>
            <button onClick={addOne}>Add One</button>
            <button onClick={removeOne}>Remove One</button>
            <button onClick={double}>Double</button>
            <button onClick={divide}>Divide</button>
            <div>
                <h1>{number}</h1>
            </div>
        </div>
    </div>
  );
}

export default Numbers;