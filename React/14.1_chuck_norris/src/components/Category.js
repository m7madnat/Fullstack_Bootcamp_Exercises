import axios from "axios";

function Category({setJoke,categories}){
    async function getJokeByCategory(e) {
        const category = e.target.getAttribute("id");
        const { data } = await axios.get(
          `https://api.chucknorris.io/jokes/random?category=${category}`
        );
        console.log(data);
        setJoke(data.value);
      }
    return (
        <div>
            <ul>
                {categories.map((category, i) => (
                    <button onClick={getJokeByCategory} key={i + category} id={category}>
                        {category}
                    </button>
                ))} 
            </ul>
        </div>
    )
}

export default Category