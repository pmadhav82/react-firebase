import React, {useContext, useState, useEffect} from "react";

import { collection, addDoc, Timestamp,where,query,onSnapshot } from "firebase/firestore";
import { onAuthStateChanged ,GoogleAuthProvider, signOut, signInWithPopup} from "firebase/auth";
import { auth, db } from "../../fireConfig";
import { useNavigate } from "react-router-dom";
export const AuthContext = React.createContext();




export const AuthProvider = ({children})=>{
    const navigate = useNavigate();

    
  const [user, setUser]= useState(null);
const [currentUser, setCurrentUser ] = useState(null);

  useEffect(()=>{
  
   const unscribe = onAuthStateChanged(auth,(user)=>{
    if(auth.currentUser){

 
        const userQuery = query(collection(db,"Users"), where("uid","==",`${auth.currentUser.uid}`));

        onSnapshot(userQuery, (snap) => {
            const newUser = snap.docs.map((doc) => {
                return {
                    id: doc.id,
                    ...doc.data()
                }
        
            })
         
            setCurrentUser(newUser[0]);
        
        
        
        })
        
    


    }
      setUser(user);
      navigate("/profile");
  })
  return unscribe;
  
  },[])


const googleSignIn = async ()=>{
   
    //User ref
const userRef = collection(db,"Users");

const provider = new GoogleAuthProvider();
signInWithPopup(auth,provider).then((result)=>{

        // check user doc is already exists
     onSnapshot(query(userRef,where ("uid", "==",`${result.user.uid}`)),(snap)=>{
     if(snap.docs.length ===0){

        const userDoc = {
            name:result.user.displayName,
            uid:result.user.uid,
            createdAt: Timestamp.now(),
            photoURL:result.user.photoURL,
            followers:[],
            following:[]
          }
          
          addDoc(userRef, userDoc)
          
     }
    })
 

    }).catch(er=>console.log(er));

    
}


const logoutHandler = async ()=>{
    try{
    await signOut(auth);
    }catch(er){
       console.log(er.message);
    }
    }

    return(<AuthContext.Provider value = {{googleSignIn, logoutHandler, user, currentUser}}>

        {children}
    </AuthContext.Provider>)
}

export const useAuth = ()=>{
    return useContext(AuthContext);
}