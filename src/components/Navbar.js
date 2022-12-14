import React from 'react';
import {Link} from "react-router-dom";

import Container from 'react-bootstrap/Container';
    import Nav from 'react-bootstrap/Nav';
    import Navbar from 'react-bootstrap/Navbar';
    import {useAuth} from "../components/contexts/AuthContext";


    function Navigation() {
const {user} = useAuth();
console.log(user)
      return (<>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
           
            {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" /> */}
            {/* <Navbar.Collapse  id="responsive-navbar-nav"> */}
              <Nav className="me-auto">
                {user && <Navbar.Brand>{user.email}</Navbar.Brand>}
              <Link className='nav-link' to = "/">Home</Link>
              {user ?  (<Link  className = 'nav-link 'to = "/profile">Profile</Link>):(<><Link  className = 'nav-link 'to = "/Signup">Sign up</Link>
<Link className='nav-link' to = "/login">Log In</Link>
</>
)}


  
              </Nav>
            {/* </Navbar.Collapse> */}
          </Container>
        </Navbar>
        </>
      );
    }
    
    


export default Navigation;