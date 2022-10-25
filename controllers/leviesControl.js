import mongoose from "mongoose";
import levies from "../models/levies.js";

export const addLev=async(req,res)=>{
    console.log("IIN SERVER ADDING ROYALTY");
    try{
        console.log(req.body);
        const lev=new levies({name:req.body.name,month:req.body.month,year:req.body.year,amountDeposited:req.body.amount,dateDeposited:req.body.date
        ,recieptNo:req.body.recieptNo,img:req.body.link
        });
        await lev.save();
        res.status(200).json(lev);

    }catch(er){
        console.log(er);
    }
}

//get for particular ID
export const getLev=async(req,res)=>{

}

//get for ALL mine ID
export const getAll=async(req,res)=>{
    
    try{
        console.log(req.params.id," ",req.query.month);
        const finall=await levies.find({name:req.params.id});
        console.log(finall,"FIND JDAA",req.params.id);
        res.status(200).json(finall);
    }catch(er){

    }
}
export const getForAll=async(req,res)=>{
    
    try{
      
        const finall=await levies.find({});
       
        res.status(200).json(finall);
    }catch(er){

    }
}

export const getPaginated=(req,res)=>{
    console.log("THIS IS IT I GUESS",req.paginatedResult);
    res.status(200).json(req.paginatedResult);
}