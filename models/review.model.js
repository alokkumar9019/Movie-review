const mongoose =require("mongoose");
const { type } = require("os");

const reviewSchema = new mongoose.Schema({
    user:{type: mongoose.Schema.Types.ObjectId, ref:"User", required: true},
    movie:{type: mongoose.Schema.Types.ObjectId, ref:"Movie", required: true},
    rating:{type: Number, min:1, max:5, required:true},
    comment:String
})

reviewSchema.post("save", async function (){
    await this.constructor.calculateAverageRating(this.movie);
});

reviewSchema.statics.calculateAverageRating= async function (movieId){
    const result = await this.aggregate([{$match:{movie:movieId}},
        {$group: {_id: "$movie", avgRating}}
    ])
    await mongoose.model("Movie").findByIdAndUpdate(movieId, {
        avgRating: result[0]?.avgRating||0
    })
}


module.exports= mongoose.model("Review", reviewSchema);