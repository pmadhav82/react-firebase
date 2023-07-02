
import React from "react";
import { collection,orderBy,query } from "firebase/firestore";
import { db } from "../fireConfig";
import { useAuth } from "./contexts/AuthContext";
import Welcome from "./Welcome";
import { Container } from "react-bootstrap";
import useQuery from "../hooks/useQuery";
import ImageGrid from "./ImageGrid";
const Home = ()=>{
  const {user}= useAuth();
   const {docs} = useQuery(query(collection(db, "imageDocs"), orderBy("createdAt", "desc")));
    return(<>
  { !user && <Welcome/>}
  <Container>
<ImageGrid  docs = {docs}/>

  </Container>
    </>)

}

export default Home;