import React, { useEffect } from "react";
import { Button, Container, Row, Col, Image } from "react-bootstrap";
import UploadProfilePicture from "./UploadProfilePicture";
import { auth } from "../fireConfig";
import ImageModal from "./ImageModal";
const ProfileCard = ({ user, userProfileUrl})=>{


    return<>
    
    <Container>
  <Row className=" d-flex justify-content-center align-items-center">
    <Col>

 <Image src={userProfileUrl} alt="242x200"  roundedCircle
                width={150}
                height={150} />
                </Col>
                </Row>
                <Row>

<Col>

<h4>{user.displayName}</h4> 
</Col>

                </Row>
                <Row>

<Col>

          <UploadProfilePicture/>
        
</Col>

   


                </Row>
    

    </Container>
    </>
}
export default ProfileCard;