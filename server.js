const express = require("express");
const dotenv= require("dotenv");
const connectDB= require("./config/db")
dotenv.config();
connectDB();
const app=express();
app.use(express.json());

app.use("/users", require("./routes/user.routes"));
app.use("/movies", require("./routes/movie.routes"));
app.use("/reviews", require("./routes/review.routes"));


const PORT=process.env.PORT||8000;
app.listen(PORT, ()=> console.log(`server is running on port ${PORT}`));
