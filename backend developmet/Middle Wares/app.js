const express= require("express");
let app = express();
app.listen(8080);
// app.use((req,res,next)=>{
//     res.send("MidleWares");
//      next();
// })

app.use("/api",(req,res,next)=>{
    let {token}=req.query;
    if(token === "access"){
        next();
    }
    res.send("Access Denied!!");
})
// app.get("/api",(req,res)=>{
//     res.send("Login succcessfully");
// })
app.get("/listing" ,(req,res)=>{
    res.send("Listing");
})

// app.get("/home" , (req,res)=>{
//     res.send("home");

// })