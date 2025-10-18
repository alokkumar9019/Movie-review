const express = require("express");

const {createReview, getReviewByMovie} = require("../controllers/review.controller");

const router = express.Router();
router.post("/", createReview);
router.get("/:movieId", getReviewByMovie);

module.exports= router;