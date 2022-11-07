import React from 'react';

const BoxBtn = () => {
    
    let [Box, setBox] = React.useState(true);
    const toggleBox = () => {
        setBox(!Box);
    }
    return (
        <div>
            <button type="button" onClick={toggleBox}>show/hide</button>
            {Box && <div className='box'></div>}
        </div>
    );
}

export default BoxBtn;
