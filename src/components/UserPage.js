import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import ProfileCard from "./ProfileCard";
import ImageGrid from "./ImageGrid";
import useQuery from "../hooks/useQuery";
import { query, where, orderBy, collection } from "firebase/firestore";
import {  auth, db} from "../fireConfig";
import { Col, Container, Row } from "react-bootstrap";
import useUser from "../hooks/useUser";
import getUsers from "../hooks/getUsers";


const UserPage = ()=>{
   const navigate = useNavigate();
const {id} = useParams();
const user = useUser(id);
const {users} = getUsers();

const {docs} = useQuery(query(collection(db, "imageDocs"), where("uid", "==", `${   id}`), orderBy("createdAt", "desc")));
const showBtn = false;
    return<>
{id === auth.currentUser.uid? navigate("/profile"):<>

    {user && <>
    
    
        <Container className="m-2">
   <Row>

      <Col>
      {users && 
      
<ProfileCard  key={user.id}  user = {user} showbtn={true} postNum = {docs.length} users={users}  />
      }
    

      
      </Col>


   </Row>

      
</Container>


        <Container>
     <ImageGrid key = {user.uid} docs = {docs} showBtn = {showBtn} user = {user} />

     </Container>

   
    
    </>}
    


</>}

    </>
}

export default UserPage;
