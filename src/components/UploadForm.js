import { Upload } from "react-bootstrap-icons";
import React, { useState } from "react"
import { Button, Form, ProgressBar } from "react-bootstrap"
import FilePreview from "./FilePreview";
import { storage,auth,db} from "../fireConfig";
import { getDownloadURL, uploadBytesResumable, ref } from "firebase/storage";
import { collection, addDoc, Timestamp, serverTimestamp } from "firebase/firestore";

const UploadForm = ({handleClose})=>{
const [file,setFile] = useState(null);
const [error, setError] = useState(null);
const [caption, setCaption] = useState("");


const [url, setUrl] = useState(null);
const [progress, setProgress] = useState(null);


// image ref in firestore
const imageRef = collection(db,"imageDocs");

const fileHandeler = (e)=>{
    
const fileType = ["image/png", "image/jpeg", "image/jpg"];
const selectedFil = e.target.files[0];
if(selectedFil && fileType.includes(selectedFil.type)){
    setFile(selectedFil);
    setError(null);
}else{
    setError("Please, select image file");
    setFile(null);
}
}






const formHandeler = (e)=>{
e.preventDefault();
const storageRef = ref(storage,`Images/${file.name}-${new Date().getTime().toString()}`);
const uploadTask = uploadBytesResumable(storageRef,file);


uploadTask.on("state_changed", (snapshot)=>{
  let percentage = Math.round(snapshot.bytesTransferred/snapshot.totalBytes)*100;
  setProgress(percentage);
},(error)=>{
  setError(error.message)
},async()=>{
  let url = await getDownloadURL(uploadTask.snapshot.ref);
  setUrl(url);

  let myDoc = {
    timestamp:serverTimestamp(),
    createdAt: Timestamp.now(),
    caption,
    url,
    uid:auth.currentUser.uid,
    uploadedBy: auth.currentUser.displayName,
    photoUrl:auth.currentUser.photoURL
  }

await addDoc(imageRef,myDoc);
 

//close the modal
handleClose()

})



}
    return<>
  
    <Form>


  
     
      <Form.Group controlId="formFileLg" className="mb-3">


      <Form.Group controlId="formFileSm" className="mb-3">
        <Form.Label>Upload photo</Form.Label>
        <Form.Control type="file" size="sm" onChange={fileHandeler} />
      </Form.Group>

     


        
      <div className="output error">
{error && error}
    </div>

      </Form.Group>

        {file && <>

          <Form.Group  controlId="exampleForm.ControlTextarea1">
        <textarea  value={caption} onChange={(e)=>{setCaption(e.target.value)}} placeholder="Say something about this photo..." className="post_input w-100" />
     
      </Form.Group>
          
<FilePreview  file = {file}/>
{ !url && progress && <ProgressBar className="m-2" now={progress} label={`${progress}%`} />}

<Form.Group>
      <Button variant="primary" disabled={!url && progress} className="m-2 w-100" type="submit" onClick={formHandeler}>
        Submit
      </Button>
    


</Form.Group>

        </>}


    </Form>
    
    </>
}
export default UploadForm;