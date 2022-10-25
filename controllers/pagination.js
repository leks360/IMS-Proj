
export default function paginatedResult(model){
    console.log("THIS IS COOL");
    return async(req,res,next)=>{
        const page=parseInt(req.query.page);
        const limit=parseInt(req.query.limit);
        
        const name=req.params.name;
        console.log("INSIDE PAGINATIOn",page,limit,name);
        const startIndex=(page-1)*limit;
        const endIndex=page*limit;
        const results={};
        console.log("START END ",startIndex,endIndex);
        if(endIndex<model.length){
            results.next={
                page:page+1,
                limit:limit
            }
        }
        if(startIndex>0){
            results.previous={
                page:page-1,
                limit:limit
            }
        }
        try{
        if(name!='none'){
            console.log("NOT NONE");
            results.results=await model.find({name:name}).limit(limit).skip(startIndex).exec();
        }else{
            console.log("NONE");
            try{
                results.results=await model.find().limit(limit).skip(startIndex).exec(); 
            }catch(er){
                console.log(er);
            }
               
        }
        console.log(results);
        req.paginatedResult=results;
        next();
        }catch(er){
            res.status(404).json("cannot load data");
        }
        
    }
}