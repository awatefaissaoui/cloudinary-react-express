const express = require('express')
const app = express()

const mongoose= require('mongoose')

const cloudinary = require('cloudinary').v2


cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_KEY,
    api_secret: process.env.CLOUD_SECRET,
    secure: true,
  });
  


require('dotenv').config()

mongoose.connect(process.env.DB).then(() => {
    console.log("database connected ");
  });


  app.use(express.urlencoded({
    extended:true
  }))



app.post('/upload' , (req,res)=>{


    try {
        console.log(req)

        res.status(200).send('uploaded')
        
    } catch (error) {
        res.status(500).send('error')

        
    }
})


app.listen(3000,()=>{
    console.log('app listening on port 3000')
})