import React from "react";
import { Button, Container, Row, Col, Image } from "react-bootstrap";
import UploadProfilePicture from "./UploadProfilePicture";

const ProfileCard = ({ user})=>{
    

console.log(user)
    return<>
    
    <Container>
  <Row className=" d-flex justify-content-center align-items-center">
    <Col xs={6} md={4}>

 <Image src={user.photoURL} alt="242x200"  roundedCircle
                width={150}
                height={150} />

    <h3>{user.displayName}</h3>  
          <UploadProfilePicture/>
    </Col>
    </Row>
    </Container>
    </>
}
export default ProfileCard;