const express = require("express");
const app = express();
const path = require("path"); 
const methodOverride = require('method-override')

const { v4: uuidv4 } = require('uuid');
app.use(methodOverride('_method'))

const port = 8080;

app.set("view engine" , "ejs");
app.set("views", path.join(__dirname,"views"));
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,"public")));
app.use(express.json());

let posts=[
    {
        id:uuidv4(),
        name:"Jawad Qasim",
        content:"I love Coading ❤️"
    },
    {
        id:uuidv4(),
        name:"Ali raza",
        content:"I love Fatima ❤️"
    },
  
    

]

app.listen(port , (req,res)=>{
    console.log("Server started");
})
app.get("/posts" , (req,res)=>{
   res.render("index.ejs",{posts});
})
app.get("/posts/new",(req,res)=>{
    res.render("create.ejs");
})

app.post("/posts" , (req,res)=>{
    let {name,content}=req.body;
    let id=uuidv4();
    posts.push({id,name,content})
    res.redirect("/posts");
 
})
app.get("/posts/:id" ,(req,res)=>{
  let {id}=req.params;
  let post = posts.find((q)=> id === q.id);
  res.render("details.ejs" , {post});

})
app.get("/posts/:id/edit" , (req,res)=>{
    let {id}=req.params;
    let post = posts.find((q)=> id === q.id);
    res.render("edit.ejs" , {post});
} )

app.delete("/posts/:id" ,(req,res)=>{
let {id} = req.params;
 posts = posts.filter((q)=> id !== q.id);
res.redirect("/posts")
})

app.patch("/posts/:id" , (req,res)=>{
    let {id} = req.params;
    let newContent=req.body.content;
    let post = posts.find((q)=> id === q.id);
    post.content=newContent;
    res.redirect("/posts");

    
})

