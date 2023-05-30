const mongoose = require("mongoose");

let courseSchema = mongoose.Schema({
    courseName:String,
    description:String,
    instructor:String
})

module.exports = mongoose.model("course",courseSchema)
