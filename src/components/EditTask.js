import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import {doc, updateDoc} from "firebase/firestore"
import { db } from '../fireConfig';




const EditTask =({id, toEditTask, toEditTaskDetails})=> {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

const [task, setTask] = useState({task:toEditTask,taskDetails:toEditTaskDetails})


const inputHandeler =  (e)=>{
    setTask({...task,[e.target.name]:e.target.value})
}

const formHandeler =  async (e)=>{
    e.preventDefault();
const docRef = doc(db,"tasks", id);
if(task.task === "" || task.taskDetails === ""){
    setTask({task:toEditTask, taskDetails:toEditTaskDetails})
    return handleClose()
}
try{
    await updateDoc(docRef, task)

}catch(er){
    console.log(er)
}



return handleClose();


}

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Edit
      </Button>

      <Modal show={show} onHide={handleClose}>

        <Modal.Header closeButton>
          <Modal.Title> Edit Task</Modal.Title>
        </Modal.Header>
          <Form>
        <Modal.Body>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Task</Form.Label>
              <Form.Control
                type="text"
                name = "task"
                value = {task.task}
                onChange = {inputHandeler}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Task Details</Form.Label>
              <Form.Control as="textarea" rows={3} 
               name = "taskDetails"
              value = {task.taskDetails}
              onChange = {inputHandeler}
              />

            </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancle
          </Button>
          <Button type = "submit" variant="primary" onClick={formHandeler}>
            Edit
          </Button>
        </Modal.Footer>

          </Form>
      </Modal>
    </>
  );
}

export default EditTask;