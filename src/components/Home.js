
import React from "react";
import { collection,query } from "firebase/firestore";
import { db } from "../fireConfig";
import { useAuth } from "./contexts/AuthContext";
import Welcome from "./Welcome";
import { Container } from "react-bootstrap";
import useQuery from "../hooks/useQuery";
const Home = ()=>{
  const {user}= useAuth();
   const {docs} = useQuery(query(collection(db, "imageDocs")))


   console.log(docs)
    return(<>
  { !user && <Welcome/>}
  <Container>


  </Container>
    </>)

}

export default Home;