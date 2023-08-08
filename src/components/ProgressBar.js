import React from 'react';
import { updateDoc, doc} from "firebase/firestore";
import { db , auth} from '../fireConfig';
import ProgressBar from 'react-bootstrap/ProgressBar';
import useStorage from '../hooks/useStorage';
import { useEffect } from 'react';
function Progress({file, setFile, userDetail}) {

  const {progress,url} = useStorage(file);

useEffect( ()=>{
if(url){

    updateDoc(doc(db,"Users", userDetail.id),{
        photoURL:auth.currentUser.photoURL
    }).catch(er=>console.log(er));

    setFile(null);
    
  }

},[url,setFile])


  return <>
  {file && <> 
  
  <ProgressBar now={progress} className='m-2' label={`${progress}%`} />
  </>}
  
  </>

  

}

export default Progress;