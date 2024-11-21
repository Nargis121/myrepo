const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const connectdb=require("./confg/db");



//dot env configuration 
dotenv.config();
//DB connection 
connectdb();




//rest object
const app = express()
//midleware
app.use(cors());
//data access
app.use(express.json());
app.use(morgan('dev'));

//route
// url http://localhost:800
app.use('/api/v1/test', require('./routes/testroutes'));



app.get('/',(req,res)=>{
    return res.status(200).send("<h1>Welcome to food web app</h1>")
}) 

//port
const port = process.env.port || 5000;


//LISTEN
app.listen(port,()=>{
    console.log(`server running on ${port}`);
});