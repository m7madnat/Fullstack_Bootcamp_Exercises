import React from "react";
  
class Time extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            seconds: "",
            minutes: "",
            hours: "",
        };
    }
    getInput = (seconds) => {
        this.setState({
            seconds: seconds,
            minutes: seconds / 60,
            hours: seconds / 3600,
        });
    };
    getJSX = () => {
        return (
            <div className="timer">
                <label>Seconds</label>
                <input id="seconds" onChange={({ target }) => this.getInput(target.value)} value={this.state.seconds}/>
                <label>Minutes</label>
                <input id="minutes" onChange={({ target }) => this.getInput(target.value * 60)} value={this.state.minutes}/>
                <label>Hours</label>
                <input id="hours" onChange={({ target }) => this.getInput(target.value * 3600)} value={this.state.hours}/>
            </div>
        );
    };
    render() {
        return <div className="main">{this.getJSX()}</div>;
    }
}

export default Time;