import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        unique:true,
        required:true,
    },
    email:{
        type:String,
        unique:true,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    contact:{
        type:Number,
    },
    role:{
        type:String,
    },
    quarryIncharge:{
        type:[String]
    },
    img:{
        type:String,
    }
    



});
export default mongoose.model('User',userSchema);