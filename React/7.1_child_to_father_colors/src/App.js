import './App.css';
import React from 'react';
import CustomButton from './components/CustomButton';

function App() {
    const colors = ["blue", "red", "yellow"];
    const [selected, setSelected] = React.useState("");
    const onChildBtnClick = (color) => {
        setSelected(color);
    };
    return (
        <div>
            <div>
                {colors.map((clr) => (
                    <CustomButton key={clr} color={clr} onClick={onChildBtnClick}/>
                ))}
            </div>
            <h1 id="msg">{`The color selected is: ${selected}`}</h1>
        </div>
    );
}

export default App;
  