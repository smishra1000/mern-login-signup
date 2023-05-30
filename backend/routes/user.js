const express = require("express")
const router = express.Router();

const User = require("../models/user")

router.post("/signup",function(req,res){
    let {name,email,password,confirmpassword} = req.body
    let user = new User({
        name,
        email,
        password,
        confirmpassword
    })
    user.save().then(function(user){
        res.send({messsage:"usersignup successfully"})
    }).catch(function(err){
        res.send(err)
    })
})

router.post("/login",function(req,res){
    User.findOne({email:req.body.email}).then(function(user){
        if(user){
            if(user.password===req.body.password){
                res.send({message:"login successfully",user:user})
            }else {
                res.send({message:"incorrect password"})
            }
        }else {
            res.send({message:"not found"})
        }
       
    }).catch(function(err){
        res.send({message: "incorrect email/password"})
    })
})

module.exports = router