import React, { useState, useEffect } from "react";
import { onSnapshot} from "firebase/firestore";
import { auth } from "../fireConfig";
const useQuery = (query) => {
    const [docs, setDocs] = useState([]);
    const fetchData = () => {

        if(auth.currentUser){

    onSnapshot(query, (snap) => {
        const newData = snap.docs.map((doc) => {
            return {
                id: doc.id,
                ...doc.data()
            }
    
        })

            setDocs(newData)
        
    
    
    
    
    })
}

}


    useEffect(() => {
        

            return fetchData();


    }, [])


    return { docs }
}
export default useQuery;