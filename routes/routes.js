const express=require("express") ;
const { getAllTasks, createTask, getTask, updateTask, deleteTask } = require("../controller/tasks.controller");
const routes=express.Router() ;



routes.get("/api/v1/tasks",getAllTasks) ;
routes.post("/api/v1/tasks",createTask) ;
routes.get("/api/v1/tasks/:id",getTask) ;
routes.patch("/api/v1/tasks/:id",updateTask) ;
routes.delete("/api/v1/tasks/:id",deleteTask) ; 
module.exports=routes ;