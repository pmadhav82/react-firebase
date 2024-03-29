import React, { useState } from "react";
import "./Sidebar.css";
import Progress from "./ProgressBar";
import { useAuth } from "./contexts/AuthContext";


const UploadProfilePicture = ()=>{
    const {currentUser} = useAuth();

const [file, setFile] = useState(null);

const [error, setError] = useState(null);

const handleChange = (event)=>{
let fileType = ["image/png", "image/jpeg", "image/jpg"];


let selectedFile = event.target.files[0];


if(selectedFile && fileType.includes(selectedFile.type)){
setFile(selectedFile);
setError(null);
}else{
setFile(null);
setError("Please select an image file");
}
 
}
    
    return<>
    <form>
<div className="info">{error && <div className="error"> {error}</div>}</div>

            <input onChange={handleChange} type="file" id="file" />
  <label htmlFor="file" className="btn-2">Change profile picture</label>
        
{file && <Progress file = {file} setFile = {setFile} userDetail={currentUser}/> }
    </form>
       
    </>
}

export default UploadProfilePicture;