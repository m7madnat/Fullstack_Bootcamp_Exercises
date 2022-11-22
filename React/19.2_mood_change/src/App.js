import React, { useState } from "react";
import colorsContext from "./components/Context";
import TopMenu from "./components/TopMenu";
import Home from "./components/Home";  
import About from   "./components/About";
import './App.css';

function App() {
  const [isDay, setisDay] = useState(true);
  return (
    <colorsContext.Provider value={{ isDay, setisDay }}>
      <div className={isDay ? "App" : "App-dark"}>
        <TopMenu />
        <Home />
        <About />
      </div>
    </colorsContext.Provider>

  );
  }
  
  export default App;
  