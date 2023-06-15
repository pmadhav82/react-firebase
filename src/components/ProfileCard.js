import React, { useEffect } from "react";
import { Button, Container, Row, Col, Image } from "react-bootstrap";
import UploadProfilePicture from "./UploadProfilePicture";
import { auth } from "../fireConfig";

const ProfileCard = ({ user, userProfileUrl})=>{
console.log(userProfileUrl);

    return<>
    
    <Container>
  <Row className=" d-flex justify-content-center align-items-center">
    <Col xs={6} md={4}>

 <Image src={userProfileUrl} alt="242x200"  roundedCircle
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