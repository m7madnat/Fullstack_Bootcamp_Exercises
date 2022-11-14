import React, {useState, useEffect } from 'react';
import Spinner from './components/Spinner';

function App() {

    const [isVisible, setIsVisible] = useState(true);

    useEffect(()=>{
        setTimeout(() => {
            setIsVisible(false)   
        }, 5000);
        },[])
    return (
        <div className="App">
            {isVisible &&<Spinner/>}
        </div>
    );
        
}
export default App;