import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {doc, deleteDoc} from "firebase/firestore";
import { db } from '../fireConfig';

const DeletePost = ({id, setPostDoc})=> {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const docRef = doc(db, "imageDocs", id);


const deleteHandeler = async ()=>{
  try{
    await  deleteDoc(docRef);
  } catch(er){
    console.log(er)
  }
  handleClose()
return(setPostDoc(null))
  
}



  return (
    <>
      <Button size='sm' variant='secondary'  onClick={handleShow}>
        Delete
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Do you want to delete?</Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Cancle
          </Button>
          <Button variant="secondary" onClick={deleteHandeler}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default DeletePost;