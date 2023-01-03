import mongoose from "mongoose";


const inspectionSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    date:{
        type:String,
        required:true,
    },
    observations:{
        type:String,
    },
    uploadedBy:{
        type:String,
    },
    img:{
        type:String,
        required:true,
    }


});
export default mongoose.model('inspection',inspectionSchema);