import mongoose from "mongoose";


const DOSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    year:{
        type:Number,
        
    },
    month:{
        type:String,
    },
    date:{
        type:String,
        required:true,
    },
    amount:{
        type:Number,
        required:true,
    },
    recieptNo:{
        type:String,
        required:true,
    },
    img:{
        type:String,
        required:true,  
    }


});
export default mongoose.model('DO',DOSchema);