import React from "react";
import ProfileCard from "./ProfileCard";
import { useAuth } from "./contexts/AuthContext";
import ImageGrid from "./ImageGrid";
import ImageModal from "./ImageModal";

const Profile = ()=>{
   const {user, userProfileUrl} = useAuth();
   return(<>
<div className="profile-wrapper container m-1 d-flex flex-wrap ">
   <div className="profile-card">
<ProfileCard key={user.email}  user = {user}  userProfileUrl = {userProfileUrl}/>
   </div>
   <div>
      <ImageModal/>
   </div>

     </div>
     <div className="image-grid">
     <ImageGrid/>
  </div>
   </>)

}

export default Profile;