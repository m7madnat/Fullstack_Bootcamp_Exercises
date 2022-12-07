import { Router } from "express";

import { getAllMovies, getMovieById, createMovie, updateMovie , deleteMovie } from "../controllers/movies.controllers.js" 

export const movieRouter = Router();

movieRouter.get("/", (req,res)=>{
    getAllMovies(req,res);
})

movieRouter.get("/:id", (req,res)=>{
    getMovieById(req,res);
})

movieRouter.post("/", (req,res)=>{
    createMovie(req,res);
})

movieRouter.put("/:id", (req,res)=>{
    updateMovie(req,res);
})

movieRouter.delete("/:id", (req,res)=>{ 
    deleteMovie(req,res);
})




