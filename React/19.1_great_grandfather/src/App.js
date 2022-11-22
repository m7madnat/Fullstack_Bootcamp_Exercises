import React, { useState } from "react";
import Grandfather from "./components/Grandfather";
import Context from "./components/Context";
    

function App() {
    
  const [gifts, setGifts] = useState([]);
    return (
        <Context.Provider value={{ gifts, setGifts }}>
            <div>
                <Grandfather />
            </div>
        </Context.Provider>
    );
}

export default App;