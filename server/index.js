require("dotenv").config({path: "./env"})
const express = require("express")
const app = express();

const {connectDB} = require("./database/mongodb.connection.js");
const PORT = process.env.PORT || 3030

connectDB()
.then(()=>{
    app.listen(PORT,()=>{
        console.log(`server is running on port :${PORT}`);
    });
    app.on('error',(err)=>{
        console.log("Error :",err);
        throw err;
    });
})
.catch((err)=>{
    console.log(`MongoDB connection Filed`,err);
})

