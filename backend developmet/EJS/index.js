let express = require("express");
const path = require("path");
const app = express();

// console.log();
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));

// when get java and css file in ejs then we used this static 

app.use(express.static(path.join(__dirname,"public")))

app.listen(3000,(req , res)=>{
    console.log("Server Started");
})

app.get("/",(req,res)=>{
 res.render("home");
})

app.get("/rolldice",(req,res)=>{
    let rolldice=Math.floor(Math.random() *6) + 1;
    res.render("rolldice.ejs",{rolldice});
   })

//    
// app.get("/id/:name",(req,res)=>{
    //    let {name}=req.params;
    // //    console.log(name);
    //     res.render("instagram.ejs",{names:name});
    //    })

    // app.get("/:username",(req,res)=>{
    //        let {username}=req.params;
    //        let dataValue=require("./data.json");
    //        let data=dataValue[username];
    //        console.log(data);   
        
    //         res.render("instagram.ejs");
    //        });

   
    app.get("/:username",(req,res)=>{
        let {username}=req.params;
        const instData=require("./data.json");
        const data=instData[username];
        if(data){
            res.render("instagram" , {data});
        }else{
           res.render("error") 
        }
    })