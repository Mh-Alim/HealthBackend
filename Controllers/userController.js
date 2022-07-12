const User = require('../models/userModel');
const ErrorHandler = require('../utils/errorHandler')
const catchAsyncErrors = require('../middleware/catchAsyncError')

// create user
exports.registerUser = catchAsyncErrors(async(req,res,next)=>{

    const {name,email,password,mobile_number} = req.body;  
    const user = await User.create({
        name,
        mobile_number,
        email,
        password,
    });
    res.status(201).json({
        message:"success",
        user,
    })
    
})


exports.getAllProduct = (req,res)=>{
    res.status(200).json({message: "success"});
}