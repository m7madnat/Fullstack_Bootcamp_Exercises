import React from 'react';

class CC extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0, name: 'Bob' };
    this.newAge = props.age;
  }

  //   state = { counter: 0, name: 'Bob' };

  handleButton = () => {
    this.setState(
      (prevState) => {
        return {
          counter: prevState.counter + 1,
        };
      },
      () => {
        console.log(this.state.counter);
      }
    );
  };

  render() {
    //*Can run code here
    console.log(this.newAge);
    return (
      <>
        <button onClick={this.handleButton}>Add</button>
        <h3>{this.state.counter}</h3>
        <h3>{this.state.name}</h3>
      </>
    );
  }
}

export default CC;
