import React, { useState, useEffect } from "react";
import { auth, db } from "../fireConfig";
import { onSnapshot, orderBy,collection,where, query, getDocs } from "firebase/firestore";
import useQuery from "../hooks/useQuery";

const ImageGrid = ()=>{


    const {docs} = useQuery(query(collection(db, "imageDocs"), where("uid", "==", `${auth.currentUser.uid}`), orderBy("createdAt", "desc")));

    console.log(docs);
//     const [docs, setDocs] = useState([]);
    
    
  
                
//                 const fetchData = ()=>{
//     let q = query(collection(db,"imageDocs"),where("uid", "==", `${auth.currentUser.uid}`), orderBy("createdAt", "desc"));
//     onSnapshot(q,(snap)=>{
//         const newData = snap.docs.map((doc)=>{
// return{
//     id:doc.id,
//     ...doc.data()
// }

//         })
        
// setDocs(newData)
//         console.log(newData);
       
        
//         })

// }

//      useEffect(()=>{

//     return fetchData()
    
//     },[])

 return<>
    <h2>Image Grid</h2>
    </>
}

export default ImageGrid;