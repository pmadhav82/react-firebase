import React from "react";
import { useAuth } from "./AuthContext";
import { Navigate } from "react-router-dom";


export const ProtectedRoute = ({children})=>{
const {user}= useAuth();
if(!user){
    return <Navigate to="/" replace ={true}/>
}

return children;
}



export const RedirectRoute = ({children})=>{
const {user} = useAuth();
if(user){
    return <Navigate to = "/profile" replace = {true}/>
}

return children;
}