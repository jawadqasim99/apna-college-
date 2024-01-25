const express = require("express");
const app =express();
const port = 8080;

app.listen(port , (req , res)=>{
    console.log("Server started");
})
app.get("/" ,(req , res)=>{
    res.send("Home Page     ");

})
app.get("/register" ,(req , res)=>{
    res.send("it used GET mathod");

})