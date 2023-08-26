const mongoose=require("mongoose") ;
require("dotenv").config() ;
const run=async()=>{
      await mongoose.connect(process.env.MONGO_URI,{useUnifiedTopology:true ,useNewUrlParser:true}).then(()=>console.log(`success connection to atlas`))
    .catch((err)=>console.log(`error to connect db`))
}


module.exports=run ;