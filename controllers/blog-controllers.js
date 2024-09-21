//displaying all blogs function 
const { json } = require('express')
const blogModel = require('../models/blogs')
const Allblogs = async(req,res)=>{
   try {
    const blogs = await blogModel.find()
    res.status(200).json(blogs)
   } catch (error) {
    res.status(500).json({message:error.message})
   } 
}
// Posting a function in a database
const PostingData=async(req,res)=>{
    try {
        const blogs = await blogModel(req.body)
        res.status(200).json(blogs)
        blogs.save().then((result)=>res.end(result)).catch((error)=>console.log(error))
    } catch (error) {
     res.status(500).json({message:"post failed due to server"})   
    }
}
//Updating function 
const updateBlogs = async(req,res)=>{
    try {
        const {id} = req.params
        const blogs = await blogModel.findByIdAndUpdate(id,req.body)
        if(!blogs){
            res.status(404).json({message:"The blog is not found"})
        }
        const updatedblog = await blogModel.findById(id)
        res.status(200).json(updatedblog)
        
    } catch (error) {
       res.status(500).json({message:"The message is in server side"}) 
    }
}
//Deleting a function 
const deleteblog = async(req,res)=>{
try {
    const blogs = await blogModel.findByIdAndDelete(req.params.id)
    if(!blogs){
        res.status(404).json({message:"the blogs is not found"})
    }
    res.status(200).json({message:"The blogs is succefully deleted "})
} catch (error) {
    res.status(500).json({message:error.message})
}
}
module.exports = {
    Allblogs,PostingData,updateBlogs,deleteblog
}
//Updating a function in database

