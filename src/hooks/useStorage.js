import  { useEffect, useState } from "react";
import { storage,auth } from "../fireConfig";
import { ref, uploadBytesResumable, getDownloadURL} from "firebase/storage";
import {  updateProfile } from 'firebase/auth';
const useStorage = (file)=>{
   


const [error, setError] = useState(null);
const [progress, setProgress] = useState(0);
const [url, setUrl] = useState(null);
 //storage ref
 const ext = file.type.split("/")[1];
 const fileName = `${auth.currentUser.email}.${ext}`;
 const storageRef = ref(storage,`/Profile/${fileName}`);
 const uploadTask = uploadBytesResumable(storageRef,file);



 useEffect(()=>{
uploadTask.on("state_changed",(snapshot)=>{
let percentage = Math.round(snapshot.bytesTransferred/snapshot.totalBytes)*100;
setProgress(percentage);
}, (err)=>{
    setError(err.message);
}, async ()=>{
 let url = await getDownloadURL(uploadTask.snapshot.ref);
 await updateProfile(auth.currentUser,{photoURL:url});
 setUrl(url);
 

})


 },[file])

    return{url,progress,error}
}
export default useStorage;