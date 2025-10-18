const mongoose = require("mongoose");
//const bcrypt = require("bcrypt.js");

const userSchema= new mongoose.Schema({
    name:String,
    email:{type:String, unique:true, required:true},
    password:{type:String, required:true},
});

userSchema.pre("save", async function(){
    this.password=await bcrypt.hash(this.password,10);
});
module.exports = mongoose.model("User", userSchema);