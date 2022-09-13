import React from "react";

import  DeleteTask from "./DeleteTask";
import EditTask from "./EditTask";


const TaskCard = ({task,taskDetails,id})=>{


    return(
   <div className= "card">
  <h5 className="card-header">{task}</h5>
  <div className="card-body">
    <p className ="card-text"> {taskDetails}</p>
    <div className="btn-group">
    <DeleteTask id = {id}/>
<EditTask id = {id} toEditTask = {task} toEditTaskDetails ={taskDetails} />
    </div>
  </div>
</div>

    )
}

export default TaskCard;