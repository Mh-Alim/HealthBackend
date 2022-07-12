const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require("bcryptjs");

const userSchema =  new mongoose.Schema({
     name: {
        type: String,
        required: [true,"Please Enter your name"],
        maxLength: [30,"can not exceed length"],
        minLength: [4,"name should have more than 5 character"],
     },
     mobile_number: {
        type: String,
        required: [true,"please enter you phone number"],
        validate: [validator.isMobilePhone,"Enter your mob number"]
     },
     email: {
        type : String,
        required: [true,"please enter your email"],
        unique: true,
        validate : [validator.isEmail,"Please Enter your email"]
     },
     password: {
         type : String,
         required: [true,"please enter your password"],
         minLength: [8,"password should be greater than 8 characters"],
         select: false,
     },
     role: {
         type : String,
         default : "user",
     }
})

userSchema.pre("save",async(next)=>{

   if(!this.isModified("password")) next();

   this.password = bcrypt.hash(this.password,10);
})


module.exports = mongoose.model("User",userSchema);