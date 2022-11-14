import React from 'react';
import '../components/style.css'

function AnimatedBox(){
    const [isAppearing, setIsAppearing] = React.useState(true);
    React.useEffect(() => {
        setTimeout(() => {
            setIsAppearing(!isAppearing)
        }, 4000);
    })
    const randomValue = Math.floor(Math.random() * 200);
    return <div className='box' style={{height: randomValue+'px', width: randomValue+'px', backgroundColor: 'red', display: isAppearing ? 'block' : 'none'}}></div>
}

export default AnimatedBox;