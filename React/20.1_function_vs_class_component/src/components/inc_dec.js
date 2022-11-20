import React from 'react';
import '../App.css';

class ButtonIncDec extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {                                                     //const [inc, setCount] = React.useState(0);                    
            inc: 0
        }
    }
    increment = () => {
        if (this.state.inc < 10) {
            this.setState({ inc: this.state.inc + 1 });              
        }
    }
    decrement = () => {
        if (this.state.inc > -10) {
            this.setState({ inc: this.state.inc - 1 });
        }
    }
    render() {
        const color = this.state.inc > 0 ? 'green' : this.state.inc < 0 ? 'red' : 'black';          //const color = inc > 0 ? 'green' : inc < 0 ? 'red' : 'black';
        return (
            <div className="App">
                <button onClick={this.increment}>+</button>                  {/* <button onClick={increment}>+</button> */}
                <label style={{ color: color }}>{this.state.inc}</label>     {/*<label style={{ color: color }}>{inc}</label>*/}
                <button onClick={this.decrement}>-</button>                  {/*  <button onClick={decrement}>-</button>*/}
            </div>
        );
    }
}

export default ButtonIncDec;

// function ButtonIncDec() {
//     const [inc, setCount] = React.useState(0);
//     const increment = () => {
//         if (inc < 10) {
//             setCount(inc + 1);
//         }
//     }
//     const decrement = () => {
//         if (inc > -10) {
//             setCount(inc - 1);
//         }
//     }
//     const color = inc > 0 ? 'green' : inc < 0 ? 'red' : 'black';

//     return (
//         <div className="App">
//             <button onClick={increment}>+</button>
//             <label style={{ color: color }}>{inc}</label>
//             <button onClick={decrement}>-</button>
//             </div>
//     );
// }
// export default ButtonIncDec;