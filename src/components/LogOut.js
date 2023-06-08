import React, {useState} from "react";
import { Button, Modal } from "react-bootstrap";
import { signOut } from "firebase/auth";
import {auth} from "../fireConfig";
const LogOut = ()=>{

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const logoutHandler = async ()=>{
        try{
        await signOut(auth);
        }catch(er){
           console.log(er.message);
        }
        }
        

    return <>
    <Button className="btn btn-secondary" onClick={handleShow}> LogOut</Button>

    <Modal  show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> User logOut</Modal.Title>
        </Modal.Header>
        <Modal.Body>Do you want to logout?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            No
          </Button>
          <Button variant="primary" onClick={logoutHandler}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    
    

    </>
}

export default LogOut