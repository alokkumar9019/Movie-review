const Movie = require("../models/movie.model");

exports.createMovie = async(req, res) =>{
    try {
        const  movie= await Movie.create(req.body);
        res.status(201).json(movie);
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}
exports.getMovies= async (req, res)=>{
    const movies= await Movie.find();
    res.json(movies);
};

exports.getMovie = async (req, res)=>{
    try {
        const movie= await Movies.findById(req.params.Id);
        res.json(movie);
    } catch (error) {
        res.status(404).json({error: "Movie not found"})
    }
}