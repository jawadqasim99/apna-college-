// let  {faker}  = require('@faker-js/faker');
const mysql=require('mysql2');
const express= require('express');
const app = express();
const path=require("path");
// const methodOverride=require("method-override");

app.use(express.urlencoded({extended:true}));
app.use(express.json);

// app.use(methodOverride('_method'));
app.set("view engine" , "ejs");
app.set("views" ,path.join(__dirname,"/views") );
app.listen(3000 , (req,res)=>{
    console.log("Server started!!");
})



const connection =  mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'app',
    password: '112233ww@W'
  });


app.get('/' ,(req,res)=>{
    let q = "select count(*) from user";
   try {
    connection.query(q , (e , result)=>{
        let count=result[0]["count(*)"]
        res.render("home",{count});
    });
   } catch (e) {
    res.send("Database not responced")
   }

    
})

// app.get("/users",(req,res)=>{
//     let q = `SELECT * FROM user`;
//     try {
//         connection.query(q , (e , result)=>{
           
//             res.render("user.ejs",{result});
//         });
//        } catch (e) {
//         res.send("Database not responced")
//        }

// })

// app.get("/user/:id/edit",(req,res)=>{
//  let {id}=req.params;
// let q= `SELECT * FROM user WHERE id='${id}'`;
// try {
//     connection.query(q , (e , result)=>{
// let data=result[0];
      
//         res.render("userEditForm.ejs",{data});
//     });
//    } catch (e) {
//     res.send("Database not responced")
//    }


// }
// )

// app.patch("/user/:id" , (req,res)=>{
//     let {id}=req.params;
//    let {username:newUserName , password:newPass}=req.body;
//    let q= `SELECT * FROM user WHERE id='${id}'`;
// try {
//     connection.query(q , (e , result)=>{
// // let data=result[0];
//       res.send("post updated");
//         // res.render("userEditForm.ejs",{data});
//     });
//    } catch (e) {
//     res.send("Database not responced")
//    }

// })




//   let  getRandomUser = ()=>{
//     return [
//     faker.string.uuid(),
//        faker.internet.userName(),
//        faker.internet.email(),
//        faker.internet.password(),
//     ];
//   }
// let user=[];
//   for (let i = 0; i <=100; i++) {
//     user.push(getRandomUser());
    
//   }

// let q="INSERT INTO user (id , name ,email , password) VALUES ?";


// try {
//     connection.query(q,[user] ,(err,result)=>{
//         if (err) throw err;
            
//     console.log(result);
//     })
// } catch (err) {
//     console.log(err);
// }

//   connection.end();




 
//  console.log(getRandomUser());