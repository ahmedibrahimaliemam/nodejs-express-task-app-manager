const Schema=require("mongoose").Schema ;
const tasksSchema=new Schema({
    name:{type:String,
        required:[true,"data must contain task name"],
        trim:true ,
    },
    completed:{type:Boolean,default:false} ,
})
module.exports=tasksSchema ;