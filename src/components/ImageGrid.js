import React, { useState } from "react";
import "./ImageGrid.css";
import ShowPost from "./ShowPost";

const ImageGrid = ({docs, showBtn,user})=>{

  const [show, setShow] = useState(false);

  
  const handleShow = () => setShow(true);
  
  
  
  const [postDoc, setPostDoc] = useState(null);
  
  const handleClose = () => {
    setShow(false);
setPostDoc(null);
  }

 return<>

    <div  className="grid-container">
      {docs && docs.map((doc)=>{
        return <>
        <div key={doc.id}  className="grid-item">
<img onClick= {()=> {setPostDoc(doc)
handleShow();
} } src={doc.url} alt=""/>

        </div>

   
        </>
      })}


    </div>
    {postDoc && <ShowPost doc={postDoc} setPostDoc = {setPostDoc} key={postDoc.id} showBtn = {showBtn}  photoURL={user.photoURL} handleClose={handleClose} show={show}/>}

    </>
}

export default ImageGrid;