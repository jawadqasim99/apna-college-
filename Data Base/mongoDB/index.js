const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/test')
  .then(() => console.log('Connected!'))
  .catch((error)=> console.log(error));


  const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    age:Number
  })

  const User=mongoose.model("User" , userSchema);
  const Employee=mongoose.model("Employee" , userSchema);