import React, { useEffect, useState } from "react";
import { useAuth } from "./contexts/AuthContext";
import { updateDoc, doc , arrayUnion, arrayRemove} from "firebase/firestore";
import { db } from "../fireConfig";
import Dropdown from 'react-bootstrap/Dropdown';


const FollowButton = ({ target_user_id})=>{

const[isFollowing, setIsFollowing] = useState(null);
const {currentUser} = useAuth();


const handleUnfollow =  async ()=>{
    try{
        await updateDoc(doc(db,"Users",currentUser.id ),{
            following:arrayRemove(target_user_id)
        });
        await updateDoc(doc(db,"Users", target_user_id),{
            followers: arrayRemove(currentUser.id)
        });
        
        setIsFollowing(false);


    }catch(er){
        console.log(er.message)
    }

}

const handleFollow = async()=>{
try{
await updateDoc( doc(db,"Users",currentUser.id),{
    following:arrayUnion(target_user_id)
})
await updateDoc(doc(db,"Users",target_user_id),{
    followers: arrayUnion(currentUser.id)
})

setIsFollowing(true);

}catch(er){
    console.log(er.message)
}

}


useEffect(()=>{
const unscribe =()=>{

currentUser.following.includes(target_user_id) ? setIsFollowing(true) : setIsFollowing(false);
}
return unscribe;
},[target_user_id])
    return<>
<div>

    {isFollowing && 
        <Dropdown>
      <Dropdown.Toggle variant="secondary" size="sm" id="dropdown-basic">
        Following
      </Dropdown.Toggle>    
      <Dropdown.Menu>

      <Dropdown.Item>
        <button  onClick={handleUnfollow} className="btn btn-danger btn-sm w-100">Unfollow</button>
      </Dropdown.Item>

      </Dropdown.Menu>

</Dropdown>
}
{!isFollowing &&

     <button onClick={handleFollow} className="btn btn-sm btn-primary">Follow</button>
}
    
</div>
    </>
}
export default FollowButton;