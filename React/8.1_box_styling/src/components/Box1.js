import Box2 from "./Box2";
import React from 'react';
import styled from 'styled-components';


const Div = styled.div`
    background-color: green;
    width: 500px;
    padding: 10px;
    `;
    
const Box1 = () => {

//     return <div style={{padding: '10px', backgroundColor: 'lightgreen' , width: '500px'}}>
//     <Box2 />
//      </div>

    return  (
        <Div>
            <Box2 />
        </Div>
    )
}

export default Box1
