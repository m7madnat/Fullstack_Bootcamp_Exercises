import React from 'react';

function Select(props){
    return (
        <select onChange={(e) => props.onChange(props.objKey,e.target.value)}>
            {Array.from(Array(props.maxAge).keys()).map(element =>{
                return <option key={element+1} value={element+1}>{element+1}</option>
            })}
        </select>
    )
}

export default Select;