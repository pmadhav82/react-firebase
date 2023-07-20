import React from "react";
import { useParams } from "react-router-dom";
import ProfileCard from "./ProfileCard";
import ImageGrid from "./ImageGrid";
import useQuery from "../hooks/useQuery";
import { query, where, orderBy, collection } from "firebase/firestore";
import { db} from "../fireConfig";
import { Col, Container, Row } from "react-bootstrap";
import useUser from "../hooks/useUser";

const UserPage = ()=>{
const {id} = useParams();
const user = useUser(id);

const {docs} = useQuery(query(collection(db, "imageDocs"), where("uid", "==", `${   id}`), orderBy("createdAt", "desc")));
const showBtn = false;
    return<>
    {user && <>
    
    
        <Container className="m-2">
   <Row>

      <Col>
    
<ProfileCard  key={user.id}  user = {user} postNum = {docs.length} />

      
      </Col>


   </Row>

      
</Container>


        <Container>
     <ImageGrid key = {user.uid} docs = {docs} showBtn = {showBtn} user = {user} />

     </Container>

   
    
    </>}
    
    </>
}

export default UserPage;
