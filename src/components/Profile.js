import React from "react";
import ProfileCard from "./ProfileCard";
import ImageGrid from "./ImageGrid";
import ImageModal from "./ImageModal";
import useQuery from "../hooks/useQuery";
import { query, where, orderBy, collection } from "firebase/firestore";
import { auth, db} from "../fireConfig";
import { Col, Container, Row } from "react-bootstrap";
import { useAuth } from "./contexts/AuthContext";
import getUsers from "../hooks/getUsers";
const Profile = ()=>{
   const {users} = getUsers();
   const {currentUser} = useAuth();
   const {docs} = useQuery(query(collection(db, "imageDocs"), where("uid", "==", `${auth.currentUser.uid}`), orderBy("createdAt", "desc")));
const showBtn = true;



   return(<>

   {  currentUser && <>
<Container className="m-2">
   <Row>

      <Col>
    
{users &&
<ProfileCard key={currentUser.id} users = {users} user = {currentUser} showbtn={!showBtn} postNum = {docs.length} />

      
}
      </Col>

      <Col>
      <ImageModal/>
      </Col>
   </Row>

      
</Container>

     <Container>
     <ImageGrid key={auth.currentUser.uid} docs = {docs} showBtn = {showBtn} user = {currentUser} />

     </Container>

   
   
   </>}

   </>)

}

export default Profile;