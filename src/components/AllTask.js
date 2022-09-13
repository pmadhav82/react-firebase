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
    console.log(taskRef)
    console.log(tasks)
})
return ()=> unsub();

},[])

    return(<>
    
    <div className="task-container">
    {tasks.map((t)=>{
         return  <TaskCard key={t.id}
          task = {t.task} 
         taskDetails ={t.taskDetails} 
         />
            
        } )
        
    }
    
    </div>
    </>)
}

export default AllTask;