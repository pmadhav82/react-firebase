import React, {useContext, useState, useEffect} from "react";

import { onAuthStateChanged } from "firebase/auth";
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

    return(<AuthContext.Provider value = {{user}}>

        {children}
    </AuthContext.Provider>)
}

export const useAuth = ()=>{
    return useContext(AuthContext);
}