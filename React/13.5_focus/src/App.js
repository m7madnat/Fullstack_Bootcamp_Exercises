import React, {useRef, useEffect } from 'react';

function App() {
    const inputF = useRef(null)
    useEffect(()=>{
        inputF.current.focus()        
    },[])
    return (<div className="App"><input
        input ref={inputF} type="text"></input>        
    </div>);
 }
export default App;