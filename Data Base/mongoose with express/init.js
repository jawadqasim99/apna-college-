//////................ JUst for created sample data

const mongoose=require("mongoose");
const Chat= require("./models/chat.js");
mongoose.connect('mongodb://127.0.0.1:27017/whatsapp')
  .then(() => console.log('Data baase Connected!'))
  .catch((error)=> console.log(error));

  let allChat=[
    {
        from:"Jawad Qasim",
        to:"Zain Ahmad",
        msg:"Alhumdolliah",
        date:new Date().getDate()
    },
    {
        from:"Zeeshan",
        to:"ali",
        msg:"Merval Books Collection",
        date:new Date().getDate()
    },
    {
        from:"Shazad",
        to:"Altaf",
        msg:"Finally reached muree",
        date:new Date().getDate()
    },
    {
        from:"iqrar",
        to:"Numan",
        msg:"WhatsApp",
        date:new Date().getDate()
    }
  ];

  Chat.insertMany(allChat);
  
 