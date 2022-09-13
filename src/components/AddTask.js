import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
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
navigate("/profile/tasks")

    }catch(er){
    setError(er.message);
    }

setTask({
    task:"",
    taskDetails:""
})
setIsDisable(false)
}




    return(<>
    <div className="addTask">
 <Form>
 <h1>Add Task</h1>
 {error && <div className= "alert alert-warning" role="alert">{error}</div>}
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Task Name</Form.Label>
        <Form.Control  required value = {task.task} onChange = {inputHandeler} type="text" name = "task" placeholder="Enter task name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Task Details</Form.Label>
        <Form.Control as="textarea" required value = {task.taskDetails} name = "taskDetails" onChange = {inputHandeler} rows={3} />
      </Form.Group>
      <Button disabled = {isDisable} variant="primary" type="submit" onClick = {formHandeler}>
        Submit
      </Button>
    </Form>
    </div>
  
    </>)
}

export default AddTask;