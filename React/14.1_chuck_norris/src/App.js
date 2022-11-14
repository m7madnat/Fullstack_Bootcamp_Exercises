import { useEffect, useState } from "react";
import axios from "axios";
import './App.css';
import Category from "./components/Category";

function App() {
  const [joke, setJoke] = useState("");
  const [categories, setCategories] = useState([]);

  async function fetchJoke() {
    const { data } = await axios.get("https://api.chucknorris.io/jokes/random");
    console.log(data);
    setJoke(data.value);
  }

  useEffect(() => {
    async function getCategories() {
      const { data } = await axios.get(
        "https://api.chucknorris.io/jokes/categories"
      );
      console.log(data);
      setCategories(data);
    }
    getCategories();
  }, []);



  return (
    <div className="App">        
    <Category setJoke={setJoke} categories={categories}/>
      <button className="buttons" onClick={fetchJoke}>Get Joke</button>      
      <p>{joke}</p>
    </div>
  );
}

export default App;