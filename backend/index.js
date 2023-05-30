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

const courseRoutes = require("./routes/course")

// routes
app.use("/",userRoutes)
app.use("/user",userRoutes)
app.use("/course",courseRoutes)



// server starting code
app.listen(7000,()=>{
    console.log("server statrted on port 7000")
})