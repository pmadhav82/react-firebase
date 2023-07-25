
import React  from "react";

import Welcome from "./Welcome";
import { Container } from "react-bootstrap";
import getUsers from "../hooks/getUsers";
import User from "./User";
import { useAuth } from "./contexts/AuthContext";
const Home = () => {
  const {user} = useAuth();
  const {users} = getUsers();

  
  


  return (<>

    <Container>

    {user&&users?   <>
    <div className = "users-list">

  {users.map((user)=>{

    return <>
  
    <User key={user.id} user = {user}/>

  
    </>
  })}

    </div>
    
   
    </> : <Welcome /> }

    </Container>
  </>)

}

export default Home;