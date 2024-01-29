const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/amazon')
  .then(() => console.log('Connected!'))
  .catch((error)=> console.log(error));

  const bookSchema= new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    author:{
        type:String,
    },
    price:{
        type:Number
    },
    catogory:{
        type:String,
        enum:{
         values:   ["comics" , "romantic"],
         message: `Values is not supported`
        }
    }

  })

  let Book= mongoose.model("Book",bookSchema);
  let book1= new Book({
    title:"Merval comics",
    author:"adam",
    price:12000,
    catogory:"comic"
  })
  book1.save().then(()=>{
    console.log("added");
  }).catch((e)=>{
    // ............ Basic syntex to fetch error from database
    console.log(e.errors['catogory'].properties.message);
  })