const express = require("express");

const {createMovie, getMovies, getMovie} = require("../controllers/movie.controller");

const router = express.Router();
router.post("/", createMovie);
router.get("/", getMovies);
router.get("/:id", getMovie);

module.exports= router;