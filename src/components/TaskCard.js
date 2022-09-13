import React from "react";

const TaskCard = ({task,taskDetails})=>{


    return(
   <div className= "card">
  <h5 className="card-header">{task}</h5>
  <div className="card-body">
    <p className ="card-text"> {taskDetails}</p>
    <div className="btn-group">
    <button className="btn btn-primary">Delete</button>
    <button className="btn btn-primary">Edit</button>
    </div>
  </div>
</div>

    )
}

export default TaskCard;