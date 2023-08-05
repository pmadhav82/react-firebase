
import React  from "react";

import Welcome from "./Welcome";
import { Container } from "react-bootstrap";
import getUsers from "../hooks/getUsers";
import { useAuth } from "./contexts/AuthContext";
import DisplayUsers from "./DisplayUsers";
import SearchBar from "./SearchBar";
import {useSearchValue} from "./contexts/SearchValueContext";
const Home = () => {
  const {user} = useAuth();
  const {users} = getUsers();
const {searchValue} = useSearchValue();
  
  


  return (<>

    <Container className = "users">

    {user&&users?   <>
    <SearchBar key={8}/>
    
<DisplayUsers key={user.id} searchValue= {searchValue} users={users}/>
    
   
    </> : <Welcome /> }

    </Container>
  </>)

}

export default Home;