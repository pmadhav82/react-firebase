import React, { useEffect, useState } from "react";
import { useAuth } from "./contexts/AuthContext";
import { updateDoc, doc , arrayUnion} from "firebase/firestore";
import { db } from "../fireConfig";

const FollowButton = ({ target_user_id})=>{

const[isFollowing, setIsFollowing] = useState(false);
const {currentUser} = useAuth();


const handleUnfollow = ()=>{


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
console.log(currentUser.following.includes(target_user_id));
}
return unscribe;
},[])
    return<>
<div>
    {isFollowing? <button  className="btn btn-secondary btn-sm">Unfollow</button>: <button onClick={handleFollow} className="btn btn-sm btn-primary">Follow</button>}
</div>
    </>
}
export default FollowButton;