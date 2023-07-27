import React, { useState,  useId } from "react";
import "./ImageGrid.css";
import Backdrop from "./Backdrop";
const ImageGrid = ({docs, showBtn,user})=>{

const [postDoc, setPostDoc] = useState(null);

 return<>

    <div key={useId()} className="grid-container">
      {docs && docs.map((doc)=>{
        return <>
        <div key={doc.id}  className="grid-item">
<img key={useId()} onClick= {()=> {setPostDoc(doc)} } src={doc.url}/>

        </div>

   
        </>
      })}


    </div>

  {postDoc && <Backdrop doc = {postDoc} setPostDoc = {setPostDoc} key={postDoc.id} showBtn = {showBtn}  photoURL={user.photoURL}/>}
    </>
}

export default ImageGrid;