import React from "react";
import Sidebar from "./Sidebar";
//import {useAuth} from "../components/contexts/AuthContext";
import AllTask from "./AllTask";
import ProfileCard from "./ProfileCard";
import { useAuth } from "./contexts/AuthContext";

const Profile = ()=>{
   const {user} = useAuth();
   return(<>
<div className="container m-2">
<ProfileCard key={user.email}  user = {user} />
     </div>
   </>)

}

export default Profile;