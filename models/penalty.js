import mongoose from "mongoose";


const penaltySchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    date:{
        type:String,
        required:true,
    },
    amount:{
        type:Number,
        required:true,
    },
    reason:{
        type:String,
    },
    imposed:{
        type:String,
    },
    img:{
        type:String,
    }


});
export default mongoose.model('penalty',penaltySchema);