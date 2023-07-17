import React, { useState, useEffect } from "react";
import { onSnapshot, where,collection, query} from "firebase/firestore";
import { db} from "../fireConfig";
const useUser = (id) => {
const userQuery = query(collection(db,"Users"), where("uid","==",`${id}`));

    const [userDetail, setUser] = useState([]);
    const fetchData = () => {


    onSnapshot(userQuery, (snap) => {
        const user = snap.docs.map((doc) => {
            return {
                id: doc.id,
                ...doc.data()
            }
    
        })
    
        setUser(user);
    
    
    
    })
    

}


    useEffect(() => {

        return fetchData();

    }, [id])


    return userDetail[0];
}
export default useUser;