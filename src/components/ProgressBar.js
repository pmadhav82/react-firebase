import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import useStorage from '../hooks/useStorage';
import { useEffect } from 'react';
function Progress({file, setFile, handleClose}) {

  const {progress,url} = useStorage(file);

useEffect( ()=>{
if(url){
  
    setFile(null);
    handleClose()
}


},[url,setFile])


  return <>
  {file && <> 
  
  <ProgressBar now={progress} className='m-2' label={`${progress}%`} />
  </>}
  
  </>

  

}

export default Progress;