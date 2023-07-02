import React from "react";
import ProfileCard from "./ProfileCard";
import { useAuth } from "./contexts/AuthContext";
import ImageGrid from "./ImageGrid";
import ImageModal from "./ImageModal";
import useQuery from "../hooks/useQuery";
import { query, where, orderBy, collection } from "firebase/firestore";
import { auth, db} from "../fireConfig";
import { Col, Container, Row } from "react-bootstrap";
const Profile = ()=>{
   const {user, userProfileUrl} = useAuth();
   const {docs} = useQuery(query(collection(db, "imageDocs"), where("uid", "==", `${auth.currentUser.uid}`), orderBy("createdAt", "desc")));

    
   return(<>

<Container className="m-2">
   <Row>

      <Col>
<ProfileCard key={user.email}  user = {user}  userProfileUrl = {userProfileUrl}/>
    
      
      </Col>

      <Col>
      <ImageModal/>
      </Col>
   </Row>


</Container>

     <Container>
     <ImageGrid docs = {docs}/>

     </Container>
  
   </>)

}

export default Profile;