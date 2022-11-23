import React from "react";
import "./App.css";
import BoxAnimation from "./components/BoxAnimation";

function App() {
  return (
    <div className="App">
      <BoxAnimation className="smallBox" />      
      <BoxAnimation className="largeBox" />
      <BoxAnimation className="mediumBox" />
    </div>
  );
}

export default App;