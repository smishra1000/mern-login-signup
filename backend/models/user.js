const mongoose = require("mongoose")

let userSchema = mongoose.Schema({
    name:String,
    email:String,
    password:String,
    confirmpassword:String
})

module.exports =  mongoose.model("user",userSchema)


