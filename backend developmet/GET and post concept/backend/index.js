const express = require("express");
const app =express();
const port = 8080;

app.use(express.urlencoded({extended:true}));
app.use(express.json);

app.listen(port , (req , res)=>{
    console.log("Server started");
})

app.get("/" ,(req , res)=>{

    res.send("Home Page     ");

})
app.get("/register" ,(req , res)=>{
    let {user,password}=req.query;
    res.send(`it used GET mathod Welcome ${user} and password ${password}`);

})
app.post("/register" ,(req , res)=>{
    let {user,password}=req.body;
  
    res.send(`it used POST mathod Welcome ${user} and password ${password}`);

})