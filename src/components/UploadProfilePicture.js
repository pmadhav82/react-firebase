import React, { useState } from "react";
import "./Sidebar.css";
import Progress from "../ProgressBar";


const UploadProfilePicture = ()=>{

const [file, setFile] = useState(null);

const [error, setError] = useState(null);

const handleChange = (event)=>{
let fileType = ["image/png", "image/jpeg"];


let selectedFile = event.target.files[0];


if(selectedFile && fileType.includes(selectedFile.type)){
setFile(selectedFile);

}else{
setFile(null);
setError("Please select an image file");
}
 
}
    
    return<>
    <form>
<div className="info">{error && <div className="error"> {error}</div>}</div>

            <input onChange={handleChange} type="file" id="file" />
  <label for="file" class="btn-2">Change profile picture</label>
        
{file && <Progress file = {file} setFile = {setFile}/> }
    </form>
       
    </>
}

export default UploadProfilePicture;