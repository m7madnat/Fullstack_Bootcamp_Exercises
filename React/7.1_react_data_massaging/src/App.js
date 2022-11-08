import './App.css';
import data from './components/data';
import Card from './components/Card';
import Name from './components/Name';
import React from 'react';

class App extends React.Component {
    state = { names: [], bornBefore: [] };
  
    getAllNames = () => {
      const names = data.map((obj) => obj.name);
      this.setState({ names: names });
    };
  
    getBornBeforeYear = (year) => {
      const objs = data.filter((obj) => {
        return Number(obj.birthday.split("-")[2]) < year;
      });
      this.setState({ bornBefore: objs });
    };
  
    render() {
      console.log(data);
      return (
        <div>
          <div>
            <button onClick={this.getAllNames}>Get names</button>
            <Name names={this.state.names} />
          </div>
          <div>
            <button onClick={() => this.getBornBeforeYear(1990)}>
              Get Born Before 90s
            </button>
            <Card objs={this.state.bornBefore} />
          </div>
        </div>
      );
    }
  }
  
  export default App;