
import React from 'react';
import { useState } from 'react';
import { Upload} from "react-bootstrap-icons";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import UploadForm from './UploadForm';
import UploadProfilePicture from './UploadProfilePicture';

function ImageModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
      <Upload size={30}/> 
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add new photo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* <UploadProfilePicture handleClose = {handleClose}/> */}
       <UploadForm handleClose = {handleClose}/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ImageModal;