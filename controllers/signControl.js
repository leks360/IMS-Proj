import mongoose from "mongoose";
import User from '../models/user.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
export const signUp=async (req,res)=>{
    //get some data over here
    console.log("SIGNUP");
    try{
        console.log(req.body.password);
        const salt=await bcrypt.genSalt(10);
        const hash=await bcrypt.hash(req.body.password,salt);
        const user=new User({...req.body,password:hash});

        await user.save();
        res.status(200).json(user);
    }catch(er){
        res.status(500).json("er");
    }
}
export const signIn=async (req,res)=>{
    console.log("singin");
    try{
        const user=await User.findOne({name:req.body.name});
        console.log("TYPED PASSWORD ",req.body.password);
        if(!user) return res.status(200).json("incorect");
        console.log(user,"wtf");
        const  {password,...others}=user;
        console.log(password);
        const isCorrect= await bcrypt.compare(req.body.password,password);
        console.log(isCorrect,"IS CORECT");
        if(!isCorrect) return res.status(200).json("incorect");
        console.log("passwowd");
        const token=jwt.sign({id:user._id,role:user.role},process.env.JWT);
        console.log("cookie");

        res.cookie("access_token",token).status(200).json(others);
        
    }catch(er){
        res.status(500).json("er");
    }
}
export const logout = async (req, res) => {
    // Set token to none and expire after 5 seconds
    console.log("LOGGIN OUT");
    return res.cookie('access_token', 'none', {
        expires: new Date(Date.now() + 2 * 1000),
       
    }).status(200).json("user logout");
    
}

