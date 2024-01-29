const express=require("express");
const mongoose=require("mongoose");
const path=require("path");
const Chat= require("./models/chat.js");
let methodOverride = require('method-override');

const app=express();

const PORT=8080;

app.listen(PORT,()=>{
    console.log(("Server started"));
})
app.use(express.static(path.join(__dirname,"public")));
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views") );
app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'));

mongoose.connect('mongodb://127.0.0.1:27017/whatsapp')
  .then(() => console.log('Data baase Connected!'))
  .catch((error)=> console.log(error));

 

//.........Show all chats in screen

app.get("/chats" ,async(req,res)=>{
    let allChats= await Chat.find();
   res.render("index.ejs", {allChats} );

})


//  add a new chat

app.get("/chats/new" ,(req,res)=>{
    res.render("newForm.ejs");
})
app.post("/chats" ,async(req,res)=>{
    let {from:newFrom,to:newTo,msg:newMsg}=req.body;
    let newChat=new Chat({
        from:newFrom,
        to:newTo,
        msg:newMsg,
      date:new Date()
    })

   await newChat.save();
   res.redirect("/chats");

})

//...........Delete chat

app.delete("/chats/:id",async(req,res)=>{
    let {id}= req.params;
   await Chat.findByIdAndDelete(id);
    res.redirect("/chats");
})

///................. Edit a test msg

app.get("/chats/:id" , async(req,res)=>{
    let {id}=req.params;
   let editUser=await Chat.findById(id);
   res.render("edit.ejs" ,{editUser});
})

app.put("/chats/:id" , async(req,res)=>{
    let {id}= req.params;
    let {msg:newmsg}=req.body;
    await Chat.findByIdAndUpdate(id,{msg:newmsg},{new:true,runValidators:true});
    res.redirect("/chats");
})




app.get("/",(req,res)=>{
    res.send("All ok!!");
})