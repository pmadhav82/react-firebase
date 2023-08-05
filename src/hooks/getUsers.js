import  { useState, useEffect } from "react";
import { onSnapshot,collection, query} from "firebase/firestore";
import { auth, db} from "../fireConfig";


const getUsers = ()=>{


    const [users, setUsers]= useState(null);
 
    const userQuery = query(collection(db,"Users"));
  
    const fetchData = () => {
        //Users except logged in user 
        if(auth.currentUser){
    onSnapshot(userQuery, (snap) => {
        const usersData = snap.docs.map((doc) => {
            return {
                id: doc.id,
                ...doc.data()
            }
  
        })

   
setUsers(usersData);



    
    })
    
}
  }
  
  
    useEffect(() => {
        if(auth.currentUser){

            return fetchData();
        }
  
  
    }, [])
  
  


    return {users, setUsers}
}

export default getUsers;