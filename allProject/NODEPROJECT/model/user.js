const mongoose=require("mongoose")


const userSchema=new mongoose.Schema({
    firstName:{type:String,default:""},
    lastName:{type:Number,default:"" },
    email:{type:String,default:""},
    password:{type:Number,default:""}
})


module.exports=mongoose.model("user",userSchema)