import React from "react";
import { Button, Container, Row, Col, Image ,Card} from "react-bootstrap";
import { query, where, orderBy, collection } from "firebase/firestore";
import useQuery from "../hooks/useQuery";
import { auth, db} from "../fireConfig";
import FollowButton from "./FollowButton";
import { Link } from "react-router-dom";
const User = ({user})=>{

    const {docs} = useQuery(query(collection(db, "imageDocs"), where("uid", "==", `${user.uid}`), orderBy("createdAt", "desc")));
    return<>
    <Container>
    
   <Row >

<Card className="user-card" style={{flexDirection:"row", padding:"0", margin:"0", maxWidth:"350px"}} >
<Image src={user.photoURL} alt="242x200"  
                width={90}
                height={90} />
<Card.Body>

<div className="profile">
    <div className="follow-btn">
    <Link  key={user.email}  replace ={true} className="nav-link" to={`/${user.uid}`}>
    
<h5>{user.name}</h5> 
    </Link>


{auth.currentUser.uid !== user.uid && <FollowButton target_user_id={user.id} />}

    </div>
<div className="profile-info">
    <b>{docs.length}</b> Posts

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