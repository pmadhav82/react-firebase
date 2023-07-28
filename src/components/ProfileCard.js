import React, {useState} from "react";
import {  Container, Row, Col, Image} from "react-bootstrap";
import { Link } from "react-router-dom";
import FollowButton from "./FollowButton";
import ShowFollowers from "./ShowFollowers";

const ProfileCard = ({ user,postNum, showbtn , users})=>{

    const [showModal, setShowModal] = useState(false);

    return<>
    
    <Container>

    <ShowFollowers users={users} showModal={showModal} setShowModal= {setShowModal} key={2} mainUser={user}/>


   <Row className=" d-flex justify-content-around">
    <Col>

 <Image src={user.photoURL} alt="242x200"  roundedCircle
                width={150}
                height={150} />
                </Col>

                </Row>

                
                <Row>

<Col>
<div className="follow-btn">
<h4>{user.name}</h4> {showbtn && <FollowButton target_user_id={user.id}/>}  

</div>
<div className="profile-info">
    
<Link className="nav-link" to={`/profile`}>
<b>{postNum}</b>Posts
</Link>

 
<p onClick={()=>setShowModal(true)} className="nav-link">
<b>{user.followers.length}</b>Followers
</p>

<p className="nav-link" to={`/following`}>
<b>{user.following.length}</b>Following
</p>

   
</div>
</Col>

                </Row>
                <Row>



   


                </Row>
     

    </Container>
    </>
}
export default ProfileCard;