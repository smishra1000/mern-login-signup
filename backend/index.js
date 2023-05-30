const express=require("express")
const app=express();
const bodyParser = require("body-parser")
const cors = require("cors")

const mongoose  = require("mongoose")

mongoose.connect("mongodb://localhost:27017/mern-login-signup")




// middleware
app.use(cors())
app.use(bodyParser.json())

// routes loading from routes file
const userRoutes = require("./routes/user")

// routes
app.use("/",userRoutes)
app.use("/user",userRoutes)


// server starting code
app.listen(7000,()=>{
    console.log("server statrted on port 7000")
})