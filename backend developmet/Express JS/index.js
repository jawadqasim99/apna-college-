let express= require("express");
let app=express();



let port =3000;

app.listen(port, ()=>{
    console.log(`server started ${port}`);
})

// app.use((req,res)=>{
//     console.log("Request recived");
//     res.send({name:"Jawad Qasim",Age:12})
// })


// // using a routes to match request 
// app.get('/',(req,res)=>{
//     res.send("<h1>HOME</h1>");
// })
// app.get('/help',(req,res)=>{
//     res.send("<h1>HELP</h1>");
// })
// app.get('/contect',(req,res)=>{
//     res.send("<h1>CONTECT</h1>");
// })
// app.post("/",(req,res)=>{
//     res.send("REquest");
// })


// ... Parameters uning request responce......
// app.get('/:name/:id',(req,res)=>{
//     let {name,id}=req.params;
//     res.send(`Contect @${name} = id ${id}`);
// })

// ......................

// using query string send a request it means to find some thingh

app.get('/search',(req,res)=>{
        let {q}=req.query;
        res.send(`Contect @${q} `);
    })
