import React from "react";
import axios from "axios";



class FetchData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      joke: ""
    };
  }

  componentDidMount() {
    this.getJoke();
  }

  getJoke = async () => {
    try {
      const joke = await axios.get("https://api.chucknorris.io/jokes/random");
      this.setState({ joke: joke.data.value });
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return <div>{this.state.joke}</div>;
  }
}

export default FetchData;