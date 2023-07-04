import React, { useState, useEffect } from "react";
import "./ImageGrid.css";
import Backdrop from "./Backdrop";
const ImageGrid = ({docs})=>{


const [showModal, setShowModal] = useState(false);
const [postDoc, setPostDoc] = useState(null);

console.log(postDoc);

 return<>

    <div className="grid-container">
      {docs && docs.map((doc)=>{
        return <>
        <div key={doc.id} className="grid-item">
<img  key={doc.id} onClick= {()=> {setPostDoc(doc)} } src={doc.url}/>

        </div>

   
        </>
      })}


    </div>

  {postDoc && <Backdrop doc = {postDoc} setPostDoc = {setPostDoc}/>}
    </>
}

export default ImageGrid;