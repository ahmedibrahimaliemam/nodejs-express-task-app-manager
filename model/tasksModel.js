const tasksSchema = require("../schema/tasks.schema");

const tasksModel=require("mongoose").model("tasks",tasksSchema) ;
module.exports=tasksModel ;