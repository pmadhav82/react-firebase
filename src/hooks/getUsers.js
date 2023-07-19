import React, { useState, useEffect } from "react";
import { onSnapshot, where,collection, query} from "firebase/firestore";
import { auth, db} from "../fireConfig";

const getUsers = ()=>{


    const [users, setUsers]= useState(null);
 
    const userQuery = query(collection(db,"Users"));
  
    const fetchData = () => {
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
  
  
    useEffect(() => {
  
        return fetchData();
  
    }, [])
  
  


    return {users}
}

export default getUsers;