import React, { useContext } from "react";
import Context from "./Context"; 

function Grandson() {
  const ctx = useContext(Context);
  console.log(ctx);
  return (
    <ul>
      <h1>gifts:</h1>
        {ctx.gifts.map((gift) => (
            <li key={gift}>{gift}</li>
        ))}
    </ul>
  );
}

export default Grandson;