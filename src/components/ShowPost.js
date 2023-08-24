import React from "react";

import Modal from 'react-bootstrap/Modal';
import ReadMore from "../hooks/ReadMore";
import EditCaption from "./EditCaption";
import DeletePost from "./DeletePost";

import Button from 'react-bootstrap/Button';
import { X} from "react-bootstrap-icons";

const ShowPost = ({doc, handleClose, setPostDoc, showBtn, photoURL, show})=>{


    return<>
    
    
    <Modal
        show={show}
        onHide={handleClose}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        keyboard={false}
       
        size="lg"
      >
    
        <Modal.Body  style={{padding:"0",
    margin:"0"}}>
  
       <button onClick={()=>handleClose()} className="close-button"><X size={40}/></button> 

        <div className="post">
<div className = "main">
<img src={doc.url} alt=""/>
   
</div>

<div className ="aside">

<div className="post-header">

    <img className ="profile-pic" src={photoURL} alt=""/>
<div className="post-info">

        <h3>
        {doc.uploadedBy}    
        
            </h3>
<p className="date">{doc.createdAt.toDate().toDateString()} </p>
</div>
</div>
<hr/>
<div className="post-content">
    {showBtn && <> <div className="action-btn">

{<DeletePost setPostDoc={setPostDoc} key={doc.id}  id = {doc.id}/>}
{<EditCaption postDoc = {doc} setPostDoc ={setPostDoc}  id={doc.id} key={7}/>}
  

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



        </Modal.Body>
        <Modal.Footer style={{padding:"0",
    margin:"0"}} >
          <Button  variant="secondary" onClick={handleClose}>
            Close
          </Button>
        
        </Modal.Footer>
      </Modal>
    </>
}
export default ShowPost;