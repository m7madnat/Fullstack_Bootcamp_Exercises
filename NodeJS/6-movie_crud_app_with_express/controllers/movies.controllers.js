import data from '../db/movies.json' assert { type: "json" };


export const getAllMovies = (req,res) =>{
    res.status(200).send(data);
}


export const getMovieById = (req,res) =>{    
    const id = req.params.id;
    const movie = data.find((movie) => movie.id === id);
    if (!movie) {
        res.status(404).send("No movie with the specified id");
    }
    res.status(200).send(movie);
}

export const createMovie = (req,res) =>{
    const movie = req.body;
    data.push(movie);
    res.status(201).send(movie);
}

export const updateMovie = (req,res) =>{
    const id = req.params.id;
    const movie = data.find((movie) => movie.id === id);
    if (!movie) {
        res.status(404).send("No movie with the specified id");
    }
    const index = data.indexOf(movie);
    const updatedMovie = req.body;
    data[index] = updatedMovie;
    res.status(200).send(updatedMovie);
}

export const deleteMovie = (req,res) =>{
    const id = req.params.id;
    const movie = data.find((movie) => movie.id === id);
    if (!movie) {
        res.status(404).send("No movie with the specified id");
    }
    const index = data.indexOf(movie);
    data.splice(index,1);
    res.status(200).send(movie);
}

