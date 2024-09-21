const express = require('express')
const app = express()
const mongoose = require('mongoose')
app.use(express.urlencoded({extended:true}))
const blogcontrollers = require('./controllers/blog-controllers')
const dburl =
  "mongodb+srv://workp:123@cluster0.qtxbx.mongodb.net/node-tuts?retryWrites=true&w=majority&appName=Cluster0";
mongoose
  .connect(dburl)
  .then(() => app.listen(3000,'localhost',()=>{
    console.log('the database and server')
  }))
  .catch((error) => {
    console.log(error);
  });

  app.use(express.json())
  app.get('/get-one',blogcontrollers.Allblogs)

  app.get('/data',(req,res)=>{
    res.send('hellow world')
  })
  app.post('/post',blogcontrollers.PostingData)
  app.put('/:id',blogcontrollers.updateBlogs)
  app.delete('/:id',blogcontrollers.deleteblog)