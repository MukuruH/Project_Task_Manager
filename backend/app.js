const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const indexRout = require("./routes/index")
const port = "3000"
const cors = require('cors')

app
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({extended:true}))
    .options('*', cors())
    .use(cors())
    
    
    //routes
    .use("/",indexRout)

app.listen(port,()=>{
    console.log("Application started at " + port)
})