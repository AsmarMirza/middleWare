import mongoose from "mongoose";


const kittySchema = new mongoose.Schema({
    email: {type:String,required:true},
    password:{type:String,required:true}
  });

 export const Kitten = mongoose.model('Kitten', kittySchema);