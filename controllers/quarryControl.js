import quarry from "../models/quarry.js";
import user from "../models/user.js";

export const addQuarry=async(req,res)=>{
    //only RC should be able to create and update quarry
    if(req.user.role=="RC"){
    console.log("adding quarry");
    console.log(req.body);
    const newQuarry=new quarry(req.body);
    try{
        const saved=await newQuarry.save();
        res.status(200).json(saved);
    }catch(er){
        console.log(er);
        console.log("cannot create quary");
    }}else{
        res.status(500).json("NOT authorized");
    }

}
export const getQuarry=async(req,res)=>{
    console.log("getting");
    try{
        console.log(req.params.id);
        const qury=await quarry.findOne({name:req.params.id});
        console.log(qury);
        res.status(200).json(qury);
    }catch(Er){

    }
}
export const getQuarries=async(req,res)=>{
    try{
        const qry=await quarry.find({});
        res.status(200).json(qry);
    }catch(er){

    }
}