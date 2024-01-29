const mongoose= require("mongoose");

const chatschema= new mongoose.Schema({
    from:{
        type:String,
        required:true
    },
    to:{
type: String,
required:true,
    },
    msg:{
        type:String,
        mexLength:50
    }
    ,
    date:{
        type:Date
    }
})

const Chat= mongoose.model("Chat", chatschema);

module.exports=Chat;