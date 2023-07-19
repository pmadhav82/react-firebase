import React from "react";
import { Button, Container, Row, Col, Image ,Card} from "react-bootstrap";

const User = ({user})=>{


    return<>
    <Container>
    
   <Row >

<Card className="user-card" style={{flexDirection:"row"}} >
<Image src={user.photoURL} alt="242x200"  
                width={100}
                height={100} />
<Card.Body>

<div className="profile">
<h4>{user.name}</h4>
<div className="profile-info">

<b>{user.followers.length}</b>Followers


<b>{user.following.length}</b>Following


</div>

</div>


</Card.Body>
 
</Card>

                </Row>
    



    </Container>
    
    
    </>
}

export default User;