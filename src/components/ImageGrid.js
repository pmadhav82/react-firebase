import React, { useState, useEffect } from "react";
import "./ImageGrid.css";
import Backdrop from "./Backdrop";
import EditCaption from "./EditCaption";
const ImageGrid = ({docs, showBtn})=>{

const [postDoc, setPostDoc] = useState(null);

console.log(postDoc);

 return<>

    <div className="grid-container">
      {docs && docs.map((doc)=>{
        return <>
        <div key={doc.id} className="grid-item">
<img onClick= {()=> {setPostDoc(doc)} } src={doc.url}/>

        </div>

   
        </>
      })}


    </div>

  {postDoc && <Backdrop doc = {postDoc} setPostDoc = {setPostDoc} key={postDoc.id} showBtn = {showBtn} />}
    </>
}

export default ImageGrid;