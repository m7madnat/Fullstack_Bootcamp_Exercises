import React from 'react';

function ChangingBox(){
    const [color, setColor] = React.useState('red');
    const [numberOfChanges, setNumberOfChanges] = React.useState(0);
    const [shape, setShape] = React.useState('box');
    const changeColorsFunc = () => {
        if(numberOfChanges <= 5)
        {
            setColor(color === 'red' ? 'black' : 'red');
            setNumberOfChanges(numberOfChanges + 1);
        }
        else if(numberOfChanges === 6) {
            setColor(color === 'red' ? 'black' : 'red');
            setNumberOfChanges(numberOfChanges + 1); 
            setShape('circle');    
        }
    }
    React.useEffect(() => {
        setInterval(changeColorsFunc, 500);
    })
    if(shape === 'box')
        return <div style={{height: '300px', width: '300px', backgroundColor: color}}></div>
    else if(shape === 'circle')
        return <div style={{height: '300px', width: '300px', backgroundColor: color, borderRadius: '50%'}}></div>

}
 export default ChangingBox;
