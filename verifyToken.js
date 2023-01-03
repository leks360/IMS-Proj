import jwt  from "jsonwebtoken";

export const verifyToken=(req,res,next)=>{
    console.log("verifying TOken");
    console.log(req.cookies);
    const token=req.cookies.access_token;
    if(!token) return res.status(404).json("NOt authorized");

    jwt.verify(token,process.env.JWT,(er,user)=>{
        if(er){
            console.log("error token");
            return res.status(404).json('wrong token');

        }
        console.log(user,"THIS IS FORM COOKUE");
        req.user=user;
        
        next();
    });
}