import React from "react";
import Sidebar from "./Sidebar";
//import {useAuth} from "../components/contexts/AuthContext";
import AllTask from "./AllTask";
import ProfileCard from "./ProfileCard";
import { useAuth } from "./contexts/AuthContext";
import ImageModal from "./ImageModal";
import UploadProfilePicture from "./UploadProfilePicture";
import ImageGrid from "./ImageGrid";

const Profile = ()=>{
   const {user, userProfileUrl} = useAuth();
   return(<>
<div className="profile-wrapper container m-1 d-flex flex-wrap flex-column">
   <div className="profile-card">
<ProfileCard key={user.email}  user = {user}  userProfileUrl = {userProfileUrl}/>
   </div>
<div className="image-modal">

     <ImageModal/>
</div>
<div className="image-grid">
   <ImageGrid/>
</div>
     </div>
   </>)

}

export default Profile;