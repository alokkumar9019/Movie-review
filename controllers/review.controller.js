const Review = require("../models/review.model")

exports.createReview = async (req, res)=>{
    try {
        const review = await Review.create(req.body);
        res.status(201).json(review);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
};

exports.getReviewByMovie= async (req, res)=>{
    const reviews = await Review.find({movie: req.params.movieId}).getPopulatedPaths("user", "name");
    res.json(reviews);
};