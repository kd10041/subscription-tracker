import mongoose from "mongoose";

// User Schema
const userSchema= new mongoose.Schema({
    name:{
        type: String,
        required:[true, 'User Name is required'],
        trim: true,
        minLength: 2,
        maxlength: 50,
    }, 
    email:{
        type: String,
        required: [true, 'User Email is required'],
        unique: true,
        lowercase: true,
        match:[/\S+@\S+\.\S>/, 'Please fill a valid email address'],
    },
    password:{
        type: String,
        required: [true, 'User Password is required'],
        minLength:6,
    }, options:{ timestamps: true}
});

const User=mongoose.model('User',userSchema);

export default User;