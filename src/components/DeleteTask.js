import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {doc, deleteDoc} from "firebase/firestore";
import { db } from '../fireConfig';

const DeleteTask = ({id})=> {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


const deleteHandeler = async ()=>{
  const docRef = doc(db, "tasks", id);
  try{
    await  deleteDoc(docRef);
  } catch(er){
    console.log(er)
  }
  return handleClose()

  
}



  return (
    <>
      <Button className='btn btn-success' variant="primary" onClick={handleShow}>
        Delete
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Do you want to delete?</Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancle
          </Button>
          <Button variant="primary" onClick={deleteHandeler}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default DeleteTask;