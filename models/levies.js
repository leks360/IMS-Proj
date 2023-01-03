import mongoose from "mongoose";


const leviesSchema=new mongoose.Schema({
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
    dateDeposited:{
        type:String,
        required:true,
    },
    amountDeposited:{
        type:Number,
        required:true,
    },
    recieptNo:{
        type:String,
    },
    img:{
        type:String,
    }


});
export default mongoose.model('Levy',leviesSchema);