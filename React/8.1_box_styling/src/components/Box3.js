import Box4 from "./Box4";
import styled from 'styled-components';

const Div = styled.div    `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background-color: pink;
    padding: 10px;    
    `;

const Box3 = () => {
    // return <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', backgroundColor: 'pink', padding: '10px'}}>
    //     <Box4 />
    //     <Box4 />
    // </div>

    return (
        <Div>
            <Box4 />
            <Box4 />
        </Div>
    )

}

export default Box3