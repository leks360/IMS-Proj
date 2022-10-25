import mongoose from "mongoose";

const quarrySchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        
    },
    location:{
        type:String,
        required:true,
    },
    leaseHolder:{
        type:[String]
    },
    leasePeriod:{
        type:[String],

    },
    img:{
        type:String,
        required:true,
    },
    concernInspector:{
        type:[String]
    },
    Material:{
        type:String,
        required:true,
    },
    MLA:{
        type:String,
        required:true,
    },
    EC:{
        type:String,
        required:true,
    },



});
export default mongoose.model('quarry',quarrySchema);