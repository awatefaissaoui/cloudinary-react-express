import React, { useState } from 'react';

const Uploader = () => {
  const [fileContent, setFileContent] = useState('');
  
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
  
        fileReader.onload = () => {
            setFileContent(fileReader.result)
          resolve(fileReader.result);
        };
  
        fileReader.onerror = (error) => {
          reject(error);
        };
      });
    
    
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <div>
        <strong>File Content:</strong>
        <pre>{fileContent}</pre>


        
      </div>
    </div>
  );
};

export default Uploader;
