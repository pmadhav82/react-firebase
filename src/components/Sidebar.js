import React from "react"
import { Link } from "react-router-dom";
import "./Sidebar.css";

import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


const Sidebar = ({logOut})=>{

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return(<>
     <Modal  show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> User logOut</Modal.Title>
        </Modal.Header>
        <Modal.Body>Do you want to logout?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            No
          </Button>
          <Button variant="primary" onClick={logOut}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    
    
    
    <div className="sidebar">

<div className="sidebarItem">

<button className="btn btn-primary " onClick={handleShow}>logOut</button>
<Link to= "tasks" className="btn btn-primary">All Tasks</Link>
<Link to = "addTask" className="btn btn-primary">Add Task</Link>

</div> 

    </div>
    
    </>)
}
export default Sidebar;