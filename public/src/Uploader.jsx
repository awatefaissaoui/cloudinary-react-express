import React, { useState } from 'react';
import axios from "axios"

const Uploader = () => {
  const [fileContent, setFileContent] = useState('');
  const [preview, setPreview] = useState('');
  
  const handleFileChange = (event) => {
    console.log(event.target.value)
    console.log(event)
    setPreview(event.target.value)
    const file = event.target.files[0];
    console.log(file)
    return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
  
        fileReader.onload = () => {
            setFileContent(fileReader.result)
            setPreview(fileReader.result)
          resolve(fileReader.result);
        };
  
        fileReader.onerror = (error) => {
          reject(error);
        };
      });
    
    
  };

   const handleUpload  = async function (){
    const res = await  axios.post("http://localhost:3000/upload", {image:fileContent})
    console.log(res)

   }


  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <div>
        <img src={preview} alt="" />
       


        
      </div>
      <button
       onClick={handleUpload}
      >Upload</button>
    </div>
  );
};

export default Uploader;
