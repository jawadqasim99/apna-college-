const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/test')
  .then(() => console.log('Connected!'))
  .catch((error)=> console.log(error));


//   const userSchema = new mongoose.Schema({
//     name:String,
//     email:String,
//     age:Number
//   })

//   const User=mongoose.model("User" , userSchema);
// //  const user1= new User({name:"Jawad Qasim",email:"jawadqasim99@gmail.com",age:21});
//  User.insertMany({name:"Mr Jawad Qasim",email:"jawadqasim9900@gmail.com",age:11}).then(()=>{console.log("Added");});