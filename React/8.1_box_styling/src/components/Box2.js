import Box3 from "./Box3";
import styled from 'styled-components';

const Div = styled.div`
    background-color: lightblue;
    padding: 10px;
    `;

const Box2 = () => {
    // return <div style={{padding: '10px', backgroundColor: 'lightblue'}}>
    //     <Box3 />
    // </div>

    return (
        <Div>
            <Box3 />
        </Div>
    )

}

export default Box2