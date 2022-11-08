import React from 'react';

function InputText(props){
    return (
        <div>
            {props.askFor} <input type='text' onChange={(e) => props.onChange(props.objKey,e.target.value)}></input>
        </div>
    )
}

export default InputText;

