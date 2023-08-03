import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import {doc, updateDoc} from "firebase/firestore"
import { db } from '../fireConfig';




const EditCaption =({id, postDoc, setPostDoc})=> {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

const [caption, setCaption] = useState(postDoc.caption);
const docRef = doc(db,"imageDocs", id);



const inputHandeler = (e)=>{
  setCaption(e.target.value);
}


const formHandeler =  async (e)=>{
    e.preventDefault();


if(caption ===""){
  setCaption(caption);
  return handleClose();
}


try{
    await updateDoc(docRef, {"caption":caption});
setPostDoc({...postDoc, caption})
}catch(er){
    console.log(er)
}



return handleClose();


}

  return (
    <>
      <Button size='sm' variant='primary' onClick={handleShow}>
        Edit caption
      </Button>

      <Modal show={show} onHide={handleClose}>

        <Modal.Header closeButton>
          <Modal.Title> Edit caption</Modal.Title>
        </Modal.Header>
          <Form>
        <Modal.Body>
         
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Enter new caption</Form.Label>
              <Form.Control as="textarea" rows={5} 
               name = "caption"
              value={caption}
              onChange= {inputHandeler}
              />

            </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancle
          </Button>
          <Button type = "submit" variant="primary" onClick={formHandeler}>
            Edit caption
          </Button>
        </Modal.Footer>

          </Form>
      </Modal>
    </>
  );
}

export default EditCaption;