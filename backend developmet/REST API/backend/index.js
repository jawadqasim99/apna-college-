const express = require("express");
const mysql=require("mysql2");
const path = require("path"); 
const methodOverride = require('method-override')
const app = express();
const port = 8080;

// Create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'Qoura',
  password:"112233ww@W"
});


app.set("view engine" , "ejs");
app.set("views", path.join(__dirname,"views"));
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,"public")));
app.use(express.json());
app.use(methodOverride('_method'));

// Stard a server.............

app.listen(port , (req,res)=>{
    console.log("Server started");
})



// ....... Show all posts fetch data in database ................. 
app.get("/posts" , (req,res)=>{
  let q=`SELECT * FROM  postsData`;
  try {
    connection.query(q,(e,result)=>{
        res.render("index.ejs" , {result});
    })
    
  } catch (e) {
    res.send("ERRor");
  }
})

app.get("/posts/new",(req,res)=>{
    res.render("create.ejs");
})

// ............... New Post Store in data base .......

app.post("/posts" , (req,res)=>{
    let {name:newUser,content:newContent}=req.body;
   
    let user=[[newUser,newContent]];
 
    let q="INSERT INTO postsData (name,content ) VALUES ?";
    try {
      connection.query(q,[user],(e,result)=>{
        if (e) throw e;
          res.redirect("/posts");
        
      })
    } catch (e) {
      res.status(500).send("Internal Server Error");
      return;
    }
})



// ..................... Find post uing id ...................

app.get("/posts/:id" ,(req,res)=>{
  let {id:idUser}=req.params;
  let q=`SELECT * FROM postsData WHERE id='${idUser}'`;
  try {
    
    connection.query(q,(e,result)=>{
      let post=result[0];
      res.render("details.ejs" , {post});
    })
  } catch (e) {
    res.status(500).send("Internal Server Error");
  } 
})


//  Edit post fetch data from database

app.get("/posts/:id/edit" , (req,res)=>{
    let {id}=req.params;
    let q=`SELECT * FROM postsData WHERE id='${id}'`;
  try {
    
    connection.query(q,(e,result)=>{
      let post=result[0];
      res.render("edit.ejs" , {post});
    })
  } catch (e) {
    res.status(500).send("Internal Server Error");
  } 
  
} )

app.patch("/posts/:id" , (req,res)=>{
  let {id} = req.params;
  let newContent=req.body.content;
  let q=`SELECT * FROM postsData WHERE id='${id}'`;
  try {
    
    connection.query(q,(e,result)=>{
      let post=result[0];
     let p=`UPDATE postsData SET content='${newContent}' WHERE id='${post.id}' `;
    try {
      connection.query(p);
      res.redirect("/posts");
    } catch (e) {
      res.status(500).send("Internal Server Error");
    }
    })
  } catch (e) {
    res.status(500).send("Internal Server Error");
  }   
})


// Delete data using data base

app.delete("/posts/:id" ,(req,res)=>{
let {id} = req.params;
let q=`DELETE FROM postsData WHERE id = '${id}'`;
try {
  connection.query(q);
  res.redirect("/posts")
} catch (e) {
  res.status(500).send("Internal Server Error");
}
})



