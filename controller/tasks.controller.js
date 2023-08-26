const tasksModel = require("../model/tasksModel");

const getAllTasks=async(req,res,next)=>{
    try{
        const data=await tasksModel.find({}) ;
        if(data.length)
        res.status(200).json({tasks:data}) ;
        else
        res.json({message:"no data found in database!"}) ;

    }
    catch(err){
        res.status(500).json({message:err})
    }
}
const createTask=async(req,res,next)=>{
    const {name,completed}=req.body ;
    console.log(name,completed);
    try{
    const task=await tasksModel.create({name,completed}) ;
    res.json({task}) ;
    }
    catch(err){
        res.status(500).json({message:err}) ;
    }
}
const getTask=async(req,res,next)=>{
    const {id}=req.params ;
    try{
        const singleTask= await tasksModel.findOne({_id:id}) ;
        if(singleTask)
        res.status(200).json({singleTask}) ;
        else
        res.status(404).json({message:"this id is not found in db!"}) ;
    }
    catch(err){
        res.status(500).json({message:err}) ;
    }
}
const updateTask=async(req,res,next)=>{
    const {name,completed}=req.body ;
    const {id}=req.params ;
    try{
        const updatedTask=await tasksModel.updateOne({_id:id},{$set:{name,completed}}) ;
        res.status(200).json({updatedTask}) ;
    }
    catch(err){
        res.status(500).json({message:err}) ;
    }
}
const deleteTask= async (req,res,next)=>{
    const {id}=req.params ;
    try{
        const checkFound= await tasksModel.findOne({_id:id}) ;
        if(checkFound){
            await tasksModel.deleteOne({_id:id}) ;
            res.status(200).json({message:"success deleted!"}) ;
        }
        else{
            res.status(404).json({message:"task not found in database!"}) ;
        }
    }
    catch(err){
        res.status(500).json({message:err}) ;
    }
}








module.exports={getAllTasks,createTask,getTask,updateTask,deleteTask} ;