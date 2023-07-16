import React, { useState } from "react";
import "./Sidebar.css";
import Progress from "./ProgressBar";
import useUser from "../hooks/useUser";
import { auth } from "../fireConfig";


const UploadProfilePicture = ({handleClose})=>{
const userDetail = useUser(auth.currentUser.uid);
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
  <label for="file" className="btn-2">Change profile picture</label>
        
{file && <Progress handleClose ={handleClose} file = {file} setFile = {setFile} userDetail={userDetail}/> }
    </form>
       
    </>
}

export default UploadProfilePicture;