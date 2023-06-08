import React, {useState} from "react";
import { Button, Modal, Form } from "react-bootstrap";
import {db} from "../fireConfig";
import {collection, addDoc, Timestamp} from "firebase/firestore";
import { useAuth } from "./contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const AddTask = ()=>{

    let {user} = useAuth();
const [isDisable,setIsDisable] = useState(false)
const [error,setError] = useState("");
const taskRef = collection(db,"tasks");
let navigate = useNavigate();


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [task, setTask] = useState({

        task : "",
        taskDetails: ""
    })
    

    
const inputHandeler = (e)=>{
    setTask({...task,[e.target.name]:e.target.value})
    }
    
    const formHandeler =  async (e)=>{
      
        e.preventDefault();
    setIsDisable(true);
    if(task.task === "" || task.taskDetails === ""){
        setIsDisable(false)
        return setError("All fields are required to fill.")
    }
         const mydoc = {created:Timestamp.now(),userEmail:user.email,...task};
        try{
           await addDoc(taskRef,mydoc);
           setIsDisable(false);
    

    setTask({
        task:"",
        taskDetails:""
    })
    return handleClose();
        }catch(er){
        setError(er.message);
        }
    
   
    setIsDisable(false)
    handleClose()
    }
    
    
    
   
        

    return <>
    <Button className="btn btn-primary" onClick={handleShow}> Add Task</Button>

    <Modal  show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> New Task</Modal.Title>
        </Modal.Header>
      

 <Form>
  <Modal.Body>
 {error && <div className= "alert alert-warning" role="alert">{error}</div>}
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Task Name</Form.Label>
        <Form.Control  required value = {task.task} onChange = {inputHandeler} type="text" name = "task" placeholder="Enter task name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Task Details</Form.Label>
        <Form.Control as="textarea" required value = {task.taskDetails} name = "taskDetails" onChange = {inputHandeler} rows={3} />
      </Form.Group>
      

  </Modal.Body>

  <Modal.Footer>
  <Button variant="secondary" onClick={handleClose}>
            Cancle
          </Button>
  <Button disabled = {isDisable} variant="primary" type="submit" onClick = {formHandeler}>
        Submit
      </Button>
  </Modal.Footer>
      
    </Form>
    
      </Modal>
    
    

    </>
}

export default AddTask;