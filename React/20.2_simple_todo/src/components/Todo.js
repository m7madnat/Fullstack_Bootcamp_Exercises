import React ,{Component} from 'react'

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isComplete: props.isComplete,
        };
    }
    toggleComplete = () => {
        this.setState({
            isComplete: !this.state.isComplete,
        });
    };
    render() {
        return (
            <div className="Todo">
                <span className={this.state.isComplete ? "complete" : "incomplete"}>
                    {this.props.title}
                </span>
                <button onClick={this.toggleComplete}>
                    {this.state.isComplete ? <>&#10003;</> : <>&times;</>}
                </button>
            </div>
        );
    }
}

export default Todo;

