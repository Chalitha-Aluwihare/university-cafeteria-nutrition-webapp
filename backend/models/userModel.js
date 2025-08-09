import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name:{type:String, req:ture},
    email:{type:String, req:ture, unique:ture},
    
})