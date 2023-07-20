
import React, { useId } from "react";
import { collection, orderBy, query, onSnapshot } from "firebase/firestore";
import { Link } from "react-router-dom";
import { db } from "../fireConfig";
import Welcome from "./Welcome";
import { Container } from "react-bootstrap";
import useQuery from "../hooks/useQuery";
import getUsers from "../hooks/getUsers";
import User from "./User";
import { AuthContext, useAuth } from "./contexts/AuthContext";
const Home = () => {
  const {user} = useAuth();
  const {users} = getUsers();
  return (<>

  
  
    <Container>

    {user&&users?   <>
    <div className = "users-list">

  {users.map((user)=>{

    return <>
    <Link key={user.email} className="nav-link" to={`/${user.uid}`}>
    <User key={user.id} user = {user}/>

    </Link>
    </>
  })}

    </div>
    
   
    </> : <Welcome /> }

    </Container>
  </>)

}

export default Home;