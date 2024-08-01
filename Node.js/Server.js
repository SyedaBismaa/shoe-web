const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");


const app = express();

app.use(bodyParser.json());

mongoose.connect(
    "mongodb+srv://SyedaBisma:syedabisma1@cluster0.zxurqym.mongodb.net/"
  
);

const db = mongoose.connection;

db.on("close " , ()=>{
    console.log("connection is not successfull")
});

db.on("open" , ()=>{
    console.log("connection is successfull yayy")
})




app.listen("5000", ()=>{
    console.log("server is runing on port 5000")
}),

//api call

app.get("/" , (req , res)=>{
    res.send("learning node.js")
});

require("./Routs/Shoes.routs")(app);

