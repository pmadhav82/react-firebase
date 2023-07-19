import React from "react";
import { Button, Container, Row, Col, Image, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

const ProfileCard = ({ user,postNum})=>{


    return<>
    
    <Container>




   <Row className=" d-flex justify-content-around">
    <Col>

 <Image src={user.photoURL} alt="242x200"  roundedCircle
                width={150}
                height={150} />
                </Col>

                </Row>

                
                <Row>

<Col>

<h4>{user.name}</h4> 
<div className="profile-info">
    
<Link className="nav-link" to={`/profile`}>
<b>{postNum}</b>Posts
</Link>

 
<Link className="nav-link" to={`/followers`}>
<b>{user.followers}</b>Followers
</Link>

<Link className="nav-link" to={`/following`}>
<b>{user.following}</b>Following
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