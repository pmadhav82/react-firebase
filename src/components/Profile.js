import React from "react";
import Sidebar from "./Sidebar";
//import {useAuth} from "../components/contexts/AuthContext";
import { signOut } from "firebase/auth";
import {auth} from "../fireConfig";

import { Outlet} from "react-router-dom";

const Profile = ()=>{





const logoutHandler = async ()=>{
try{
await signOut(auth);
}catch(er){
   console.log(er.message);
}
}


   return(<>
   
<div className="container">
   <Sidebar logOut = {logoutHandler}/>     
<Outlet/>
     </div>
   </>)

}

export default Profile;