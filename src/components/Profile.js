import React from "react";

import {useAuth} from "../components/contexts/AuthContext";
import { signOut } from "firebase/auth";
import {auth} from "../fireConfig";

const Profile = ()=>{

const {user} = useAuth();



const logoutHandler = async ()=>{
try{
await signOut(auth);
}catch(er){
   console.log(er);
}
}
   return(<>
   
   {user ? ( <div className="container"><div className="card mt-4"><h2 className="card-title">Welcome, {user.email}</h2>
   <div className="card-body">

   <button className="btn btn-primary " onClick={logoutHandler}>Log Out</button> 
   </div>
    </div> </div>) :(<h2>No user found :( </h2>)}

   </>)

}

export default Profile;