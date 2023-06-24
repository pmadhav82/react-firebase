
import React from "react";
import { Link, Navigate} from "react-router-dom";
import { Container, Row,Col, Button } from "react-bootstrap";
import ImageModal from "./ImageModal";
const Welcome = ()=>{


    return<>
    
      
  <Container className="d-flex justify-content-center align-items-center flex-column mt-5">

<Row>
  <Col><h2>Welcome to FireGram!</h2></Col>
</Row>

<Row>
<Col>
<p>
          Firegram is the place for you to share your memories with others.
        </p>
        <p>
          Join our community now and start sharing your moments!
        </p>
        
</Col>
</Row>
<Row>
  <Col>



<Button className="btn btn-secondary m-2">

<Link className='nav-link' to = "/login">Log In</Link>

</Button>

<Button  className="btn btn-primary ">
  <Link 
   className = 'nav-link 'to = "/Signup">Sign up
   </Link>

  </Button>

 
  </Col>
</Row>

  </Container>
  
  
    </>
}

export default Welcome;