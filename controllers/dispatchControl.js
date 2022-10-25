import dispatch from "../models/dispatch.js";

export const  addDispatch=async(req,res)=>{
    console.log("adding dispatch ");
    //only rc and particular inspetor wil be able to create dispatch 
    //so add the authentication here
    //in frontend button should be displayedony when 
    
    try{
        //if already found in name then i have to append it to already existing
        
            const newup={
                
                month:req.body.month,
                amount:req.body.amount,
                dispatchNo:req.body.dispatchNo
            }
            console.log("INDISPATCH COINTROL :",req.body.year)
            const newdr=await dispatch.findOneAndUpdate({quarry:req.body.name,year:req.body.year},{
                $push:{Month:newup}
            },{new:true});

            if(newdr){
                console.log(newdr,"oldone na adding");
                return res.status(200).json(newdr);
            }else{
                console.log("adding new one");
                const dis=new dispatch({...req.body,year:req.body.year,quarry:req.body.name});
                await dis.save();
                await  dis.update({
                    $push:{Month:newup}
                },{new:true})
                
                
                
                return res.status(200).json(dis);
            }
            
      
        
        //if not found i create new for january
       
        
        
        
    }catch(er){
       
       
    }

}
export const getDispatchByName=async(req,res)=>{
    try{
       console.log(req.params.name," ",req.query.year);
        const dat=await dispatch.findOne({quarry:req.params.name,year:req.query.year});
        console.log(dat,"gettin ispatch by name");
        res.status(200).json(dat);
    }catch(er){

    }
}