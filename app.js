const express = require('express') ;
const routes = require('./routes/routes');
const main=require("./db/dbConnection") ;
const notFound = require('./middelware/notFound');
const cors=require("cors") ;
const app = express() ;
const port = 3000 ;
//middelware
app.use(express.static("./public"))
app.use(express.json()) ;
app.use(cors()) ;
app.use(routes) ;
app.use(notFound) ;
main() ;
app.listen(port, () => console.log(`Example app listening on port ${port}!`)) ;
