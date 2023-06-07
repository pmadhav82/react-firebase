import React, {useEffect, useState} from "react";
import TaskCard from "./TaskCard";
import { collection, query, orderBy, where, onSnapshot } from "firebase/firestore";
import { db } from "../fireConfig";
import { useAuth } from "./contexts/AuthContext";
const AllTask = ()=>{
const [tasks,setTasks]= useState([]);
const {user} = useAuth()
useEffect( ()=>{

const q =  query(collection(db,"tasks"), where("userEmail","==" , `${user.email}`) , orderBy("created","desc"));


const unsub = onSnapshot(q,(snapshot)=>{
 const  taskRef = snapshot.docs.map((doc)=>{
        return{
            id:doc.id,
            task:doc.data().task,
            taskDetails:doc.data().taskDetails,
            userEmail:doc.data().userEmail
        }
    })
    setTasks(taskRef);
})
return ()=> unsub();

},[])

    return(<>
    {tasks.length ===0 && <div><h2>You do not have any tasks.</h2></div>}
    <div className="task-container">
    {tasks.map((t)=>{
         return  <TaskCard key={t.id}
          task = {t.task} 
          id = {t.id}
         taskDetails ={t.taskDetails} 
         />
            
        } )
        
    }
    
    </div>
    </>)
}

export default AllTask;