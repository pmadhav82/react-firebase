import React, { useId } from "react";
import { X} from "react-bootstrap-icons";
import ReadMore from "../hooks/ReadMore";
import EditCaption from "./EditCaption";
import DeletePost from "./DeletePost";

const Backdrop = ({doc, setPostDoc, showBtn})=>{

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
<p className="date">{doc.createdAt.toDate().toDateString()} </p>
</div>
</div>
<hr/>
<div className="post-content">
    {showBtn && <> <div className="action-btn">

{<DeletePost setPostDoc={setPostDoc} key={doc.id} id = {useId()}/>}
{<EditCaption postDoc = {doc} setPostDoc ={setPostDoc} id={doc.id}  key={doc.id}/>}
  

    </div>
    
    </>}
  <p>

     
        { <ReadMore>


        {
doc.caption}
        </ReadMore> }

    </p>

 
</div>


</div>






    </div>


</div>


</div>

    </>
}
export default Backdrop;