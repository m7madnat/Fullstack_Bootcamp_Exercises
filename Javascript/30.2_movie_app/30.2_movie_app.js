
const url = "https://www.omdbapi.com/?apikey=41d7ebe9";

const films = [];

const filmsList = document.querySelector(".films");
const [searchTxt, searchBtn] = document.querySelector(".search").children;
const msgError = document.querySelector(".msgError");


const getMovieData = async (title) => {
    const req = await fetch (`${url}&t=${title}`);
    try {
        if (req.status === 404) {
            throw new Error(`User ${title} Not found`);
        }
        const data = await req.json();
        return {
            poster  : data.Poster,
            movieTitle : data.Title,
            year : data.Year,
            genre : data.Genre,
            director : data.Director,
            plot : data.Plot,
            actors : data.Actors,
            ratings : data.Ratings,
        };
    } catch (err) {
        return err;
    }
};

const renderData = (data) => {
    const card = document.createElement("a");
    const img = document.createElement("img");
    const h3 = document.createElement("h3");
    const info = document.createElement("span");

    card.classList.add("card");
    img.setAttribute("src", data.poster);
    h3.textContent = `${data.movieTitle}`;
    const fullInfo = `Genre: ${data.genre} <br>
    Year: ${data.year}<br>
    Plot: ${data.plot}<br>
    Director: ${data.director}<br>
    Actors: ${data.actors}<br>
    Ratings: ${data.ratings.map((rating) => rating.Source + " " + rating.Value).join(", ")}`;
    info.innerHTML = fullInfo;
    card.append(img, h3, info);
    return card;
};

const searchFilm = async () => {
    const newFilm = [...filmsList.children];
    newFilm.forEach((element) => {
        element.remove();
      });      
    const moviename = searchTxt.value;
    msgError.textContent = "";
    searchTxt.value = "";  
    try {
        const movieData = await getMovieData(moviename);
        if (movieData instanceof Error) {
            throw movieData;
        }
        const filmCard = renderData(movieData);     
        filmsList.append(filmCard);
    } catch (err) {
        msgError.textContent = err;
    }
    searchTxt.focus();
};

function pushData() {
    searchBtn.addEventListener("click", searchFilm);
    searchTxt.addEventListener("keydown",(e) => e.key === "Enter" && searchFilm());
}
pushData();