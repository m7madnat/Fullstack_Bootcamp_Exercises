import React from 'react';

function TextArea(props){
    return (
        <div>
            Free Text: <textarea onChange={(e) => props.onChange(props.objKey,e.target.value)}></textarea>
        </div>
    )
}
export default TextArea;