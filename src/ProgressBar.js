import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import useStorage from './hooks/useStorage';
import { useEffect } from 'react';
function Progress({file, setFile}) {

  const {progress,url} = useStorage(file);

useEffect( ()=>{
if(url){
    console.log(url)
    setFile(null);
}


},[url,setFile])


  return <>
  {file && <> 
  
  <ProgressBar now={progress} label={`${progress}%`} />
  </>}
  
  </>

  

}

export default Progress;