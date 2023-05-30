const express = require("express")

const Course = require("../models/course")

const router = express.Router();


router.post("/",function(req,res){
   let {courseName,description,instructor} = req.body
   let course = new Course({courseName,description,instructor})

   course.save().then(function(data){
        res.send(data)
   }).catch(function(err){
    res.send("some error")
   })

})


router.get("/",function(req,res){
    Course.find({}).then(function(courses){
        res.send(courses)
    }).catch(function(err){
        res.send("some error")
    })
})

router.delete("/:id",function(req,res){
    Course.deleteOne({"_id":Object(req.params.id)}).then(function(data){
        res.send(data)
    }).catch(function(err){
        res.send(err)
    })
   
})

router.delete("/byName/:name",function(req,res){
    Course.deleteOne({"courseName":req.params.name}).then(function(data){
        res.send(data)
    }).catch(function(err){
        res.send(err)
    })
})

module.exports = router

// http://localhost:7000/course/byId

//http://localhost:7000/course/2



// get----use to get data from server 

// post----use to create data on server

// put----update the resource on server 

// delete---delete the resource on server