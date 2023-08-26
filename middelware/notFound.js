const notFound=(req,res,next)=>{
res.status(404).
send("<h1 style='position:absolute;background-color:red;top:50%;left:50%;transform:translate(-50%,-50%')>the route not dose not exist!<h1>") ;
}
module.exports=notFound ;