import React, { useEffect, useState } from "react";
import { storage,auth } from "../fireConfig";
import { ref, uploadBytesResumable, getDownloadURL} from "firebase/storage";
import {  updateProfile } from 'firebase/auth';
import { useAuth } from "../components/contexts/AuthContext";
const useStorage = (file)=>{
const [error, setError] = useState(null);
const [progress, setProgress] = useState(0);
const [url, setUrl] = useState(null);
 //storage ref
 const storageRef = ref(storage,`/Profile/${file.name}`);
 const uploadTask = uploadBytesResumable(storageRef,file);
const {setUserProfileUrl} = useAuth();
 useEffect(()=>{
uploadTask.on("state_changed",(snapshot)=>{
let percentage = Math.round(snapshot.bytesTransferred/snapshot.totalBytes)*100;
 
setProgress(percentage);
}, (err)=>{
    setError(err);
}, async ()=>{
 let url = await getDownloadURL(uploadTask.snapshot.ref);
 await updateProfile(auth.currentUser,{photoURL:url});
 setUserProfileUrl(url)
})


 },[file])

    return{url,progress,error}
}
export default useStorage;