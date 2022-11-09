import { useState } from 'react';
import './App.css';

// const Checkbox = (props) => {
// const [isChecked, setIsChecked] = useState(props.checked);
// onChange={() => {
//   setIsChecked((prev) => !prev);
// }}
const Checkbox = ({ isChecked, checkboxText }) => {
  return (
    <div>
      <input checked={isChecked} type='checkbox' />
      <label>{checkboxText}</label>
    </div>
  );
};

function App() {
  return (
    <div>
      {/* <Checkbox isChecked={myCheckboxes[0]} checkboxText='I 1' />
      <Checkbox isChecked={myCheckboxes[1]} checkboxText='I 2' />
      <Checkbox isChecked={myCheckboxes[2]} checkboxText='I 3' />
      <Checkbox isChecked={myCheckboxes[3]} checkboxText='I 4?' /> */}
      <button>click</button>
    </div>
  );
}

export default App;
