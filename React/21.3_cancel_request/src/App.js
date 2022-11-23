import "./App.css";
import FetchData from "./components/FetchData";
import { useState } from "react";

function App() {
  const [toggle, setToggle] = useState(true);
  return (
    <div className="App">
      <button onClick={() => setToggle(!toggle)}>Toggle</button>
      {toggle && <FetchData />}
    </div>
  );
}

export default App;