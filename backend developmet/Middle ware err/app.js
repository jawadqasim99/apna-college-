const express=require("express");
const ExpressError = require("./expressError");
const app=express();

app.listen(8000,()=>{
    console.log(`sever started 8000`);
})

// app.use("/",(req,res,next)=>{
// console.log("error");
//     next()
// })
// app.get("/api",(req,res)=>{
//     res.send("ok")
// })

const checkToken=(req,res,next)=>{
    const {token}=req.query;
    if(token === "access"){
        next();
    }
    throw new ExpressError(401,"Access Denied!!");
}
app.use((err,req,res ,next)=>{
    console.log("------- Error ----------");
    next(err);
})
app.get("/api",checkToken,(req,res)=>{
   res.send("Data")
})

