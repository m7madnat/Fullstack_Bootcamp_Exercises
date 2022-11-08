import './checkbox.css'
import React from 'react';

function Checkboxes(props) {
    const [checked, setChecked] = React.useState(props.checked);
  
    function onCheckboxChange() {
      setChecked(!checked);
    }
  
    return (
      <div>
        <input
          id={props.id}
          type="checkbox"
          onChange={onCheckboxChange}
          checked={checked}
        />
        <label htmlFor={props.id}>{props.text}</label>
      </div>
    );
}

export default Checkboxes;



