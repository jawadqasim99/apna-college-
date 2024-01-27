let  {faker}  = require('@faker-js/faker');
const mysql=require('mysql2');
const express= require('express');
const app = express();

const port = 3000;

app.listen(port , (req,res)=>{
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
    connection.query(q , (err , result)=>{
        
    });

    res.send("Jawad Qasim");
})




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