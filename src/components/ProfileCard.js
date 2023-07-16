import React, { useEffect } from "react";
import { Button, Container, Row, Col, Image, Dropdown } from "react-bootstrap";
import UploadProfilePicture from "./UploadProfilePicture";
import { auth } from "../fireConfig";
import ImageModal from "./ImageModal";
import { Link } from "react-router-dom";
const ProfileCard = ({ user, userProfileUrl, postNum})=>{


    return<>
    
    <Container>




   <Row className=" d-flex justify-content-around">
    <Col>

 <Image src={userProfileUrl} alt="242x200"  roundedCircle
                width={150}
                height={150} />
                </Col>

                </Row>

                
                <Row>

<Col>

<h4>{user.displayName}</h4> 
<div className="profile-info">
    
<Link className="nav-link" to={`/profile`}>
<b>{postNum}</b>Posts
</Link>

 
<Link className="nav-link" to={`/followers`}>
<b>0</b>Followers
</Link>

<Link className="nav-link" to={`/following`}>
<b>0</b>Following
</Link>

   
</div>
</Col>

                </Row>
                <Row>



   


                </Row>
     

    </Container>
    </>
}
export default ProfileCard;