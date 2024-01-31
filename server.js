const express = require('express')
const app = express()

const mongoose= require('mongoose')

const cloudinary = require('cloudinary').v2
const cors = require('cors')

require('dotenv').config()

cloudinary.config({
    cloud_name: process.env.CLOUD,
    api_key: process.env.CLOUD_KEY,
    api_secret: process.env.CLOUD_SECRET,
    secure: true,
  });
  

app.use(cors({
  origin:"*",
  credentials : true
}))

mongoose.connect(process.env.DB).then(() => {
    console.log("database connected ");
  });


  app.use(express.urlencoded({
    extended:true
  }))

  app.use(express.json())



console.log(process.env.CLOUD)

app.post('/upload' ,async (req,res)=>{
  


  

       await  new Promise((resolve, reject) => {
          cloudinary.uploader.upload(
            req.body.image,
            { folder: "images", resource_type: "auto" },
            async function (error, result) {
              console.log(error ,result)
              if (error) {
                console.log("Upload error:", error);
                reject(error);
                res.status(400).json({error : " not ok"})

                return;
              }
              resolve(result);
              res.status(200).json({data : result})

            }
            );
          })
          
        

})


app.listen(3000,()=>{
    console.log('app listening on port 3000')
})