import React from "react";
import { X } from "react-bootstrap-icons";

const Backdrop = ({doc, setPostDoc})=>{
 
    const closeModal = (e)=>{
        if(e.target.classList.contains("back-drop")){
            setPostDoc(null);
        }
    }

    return<>
<div className="back-drop" onClick={closeModal} >
<div className="post-wrapper">
    <button onClick={()=>setPostDoc(null)} className="close-button"><X size={40}/></button>
    <div className="post">
<div className = "main">
<img src={doc.url} alt="main picture"/>
   
</div>

<div className ="aside">

<div className="post-header">

    <img className ="profile-pic" src={doc.photoUrl} alt="profile picture"/>
<div className="post-info">
<h3>{doc.uploadedBy}</h3>
<p>{doc.createdAt.toDate().toDateString()} </p>

</div>
</div>
<hr/>
<div className="post-content">
    <p>
    {
doc.caption}
    </p>

 
</div>


</div>






    </div>


</div>

{/* <img alt="imaage" src= {doc.url} style={{maxWidth:"500px", width:"100%", margin:"1rem auto", maxHeight:"80%"}}/> */}

</div>

    </>
}
export default Backdrop;