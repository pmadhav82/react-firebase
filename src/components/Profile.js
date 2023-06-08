import React from "react";
import Sidebar from "./Sidebar";
//import {useAuth} from "../components/contexts/AuthContext";
import AllTask from "./AllTask";
const Profile = ()=>{
   return(<>
<div className="container">
   <Sidebar/>     
<AllTask/>
     </div>
   </>)

}

export default Profile;