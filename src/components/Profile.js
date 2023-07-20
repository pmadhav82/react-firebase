import React, { useId } from "react";
import ProfileCard from "./ProfileCard";
import ImageGrid from "./ImageGrid";
import ImageModal from "./ImageModal";
import useQuery from "../hooks/useQuery";
import { query, where, orderBy, collection } from "firebase/firestore";
import { auth, db} from "../fireConfig";
import { Col, Container, Row } from "react-bootstrap";
import useUser from "../hooks/useUser";
const Profile = ()=>{
   const userDetail = useUser(auth.currentUser.uid);
   const {docs} = useQuery(query(collection(db, "imageDocs"), where("uid", "==", `${auth.currentUser.uid}`), orderBy("createdAt", "desc")));
const showBtn = true;


   return(<>

   {  userDetail && <>
<Container className="m-2">
   <Row>

      <Col>
    
<ProfileCard key={userDetail.id}  user = {userDetail} postNum = {docs.length} />

      
      </Col>

      <Col>
      <ImageModal/>
      </Col>
   </Row>

      
</Container>

     <Container>
     <ImageGrid key={auth.currentUser.uid} docs = {docs} showBtn = {showBtn} user = {userDetail} />

     </Container>

   
   
   </>}

   </>)

}

export default Profile;