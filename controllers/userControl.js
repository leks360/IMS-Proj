import user from "../models/user.js";

export const update=async(req,res)=>{
    if(req.params.id==req.user.id){
        try{
            const updated=await  user.findByIdAndUpdate(req.params.id,{
                $set:req.body
            },{new:true});
            resizeBy.status(200).json(updated);

        }catch(er){
            console.log(er);
        }
    }
}
export const getUser=async(req,res)=>{
    try{
        const fuser=await user.findOne({name:req.params.id});

        fuser.password="null";
        res.status(200).json(fuser);

    }catch(er){
        console.log(er);
    }
}
export const getAllUser=async(req,res)=>{
    try{
        const fuser=await user.find();
        
        for(let i=0;i<fuser.length;i++){
            fuser[i].password="null";
        }
        res.status(200).json(fuser);
    }catch(er){
        console.log(er);
    }
}
export const Delete=async(req,res)=>{
    if(req.params.id==req.user.id){
        try{
            await user.findByIdAndDelete(req.params.id);
            res.status(200).json("User Deleted");
        }catch(er){

        }
    }
}