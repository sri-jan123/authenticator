const mongoose=require('mongoose')

const userSchema=new mongoose.Schema({
    username:{
     required:true,
     unique:true,
     type:String
    },
    email:{
        required:true,
        type:String,
        unique:true
    },
    password:{
        required:true,
        type:String,
    },
    question:{
        type:String,
        required:true
    }

})
module.exports=mongoose.model("user",userSchema)
