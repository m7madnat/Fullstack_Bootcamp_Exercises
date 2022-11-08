import { useState } from 'react';
import './App.css';

//? Where is my state?
const CustomButton = ({ colorProp, setColor }) => {
  return (
    <button
      onClick={() => {
        setColor(colorProp);
      }}
    >
      {colorProp}
    </button>
  );
};

function App() {
  const [colorTo, setColorTo] = useState('Red');
  const colors = ['blue', 'red', 'yellow'];

  const insertColors = () => {
    return colors.map((color) => <CustomButton colorProp={color} setColor={setColorTo} />);
  };
  return (
    <div>
      {insertColors()}
      <h4>{colorTo}</h4>
    </div>
  );
}

export default App;
