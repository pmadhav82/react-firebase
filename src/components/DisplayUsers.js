import React from "react";
import User from "./User";
const DisplayUsers = ({users, searchValue})=>{

const filteredUsers = users.filter((user)=>{
if(searchValue.trim() === "")return user
else{
  return user.name.toLowerCase().includes(searchValue);
}

})


    return<>
        <div key={2} className = "users-list">

{filteredUsers.map((user)=>{

  return <>

  <User key={user.id} user = {user}/>


  </>
})}

  </div>
    </>
}
export default DisplayUsers;