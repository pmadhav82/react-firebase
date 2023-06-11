import React, {useContext, useState, useEffect} from "react";

import { onAuthStateChanged ,GoogleAuthProvider, signOut, signInWithPopup} from "firebase/auth";
import { auth } from "../../fireConfig";

export const AuthContext = React.createContext();




export const AuthProvider = ({children})=>{
    
  const [user, setUser]= useState(null);
  useEffect(()=>{
  
   const unscribe = onAuthStateChanged(auth,(user)=>{
      setUser(user);
  })
  return unscribe;
  
  },[])


const googleSignIn = ()=>{
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth,provider)
    
}


const logoutHandler = async ()=>{
    try{
    await signOut(auth);
    }catch(er){
       console.log(er.message);
    }
    }

    return(<AuthContext.Provider value = {{googleSignIn, logoutHandler, user}}>

        {children}
    </AuthContext.Provider>)
}

export const useAuth = ()=>{
    return useContext(AuthContext);
}