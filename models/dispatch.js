import mongoose from "mongoose";


const dispatchSchema=new mongoose.Schema({
    quarry:{
        type:String,
        required:true,
    },
    year:{
        type:Number,
        required:true,
    },
    Month:[{
        month:{
            type:String,
            required:true,
        },
        amount:{
            type:Number,
            required:true,
        },
        dispatchNo:{
            type:String,
            required:true,
        },
        DispatchFile:{
            type:String,
            required:true,
        },
        closingBalance:{
            type:Number,
            
        }
    }]





});
export default mongoose.model('Dispatch',dispatchSchema);