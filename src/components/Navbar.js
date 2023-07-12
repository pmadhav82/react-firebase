import React, { useState } from 'react';
import {Link} from "react-router-dom";
import {Image, NavDropdown} from "react-bootstrap";
import Container from 'react-bootstrap/Container';
    import Nav from 'react-bootstrap/Nav';
    import Navbar from 'react-bootstrap/Navbar';
    import {useAuth} from "../components/contexts/AuthContext";



    function Navigation() {
const {user, logoutHandler, userProfileUrl} = useAuth();
const [showDropDown, setShowDropDown] = useState(false);

const dropDownHandeler = ()=> setShowDropDown(!showDropDown);

      return (<>
        <Navbar expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand>
            <Link  className='nav-link' to = "/">
              
            <Image className='m-1' src="logo.png" rounded   width={40}
                height={40}/>
                FireGram
            </Link>
              </Navbar.Brand>
                {/* {user && <Navbar.Brand>{user.displayName}</Navbar.Brand>} */}


  
          <Navbar collapseOnSelect  bg="dark" variant="dark" id="responsive-navbar-nav">

           
   <Nav  className="me-auto">

  {user ? <>
  
    <NavDropdown style={{right:"100%"}}
             id="nav-dropdown-dark-example"
            
             menuVariant="dark"
            title={
              <Image
                src={userProfileUrl}
                roundedCircle
                width={40}
                height={40}
              />
            }
            show={showDropDown}
            onToggle={dropDownHandeler}
          >

            <NavDropdown.Item >{user.displayName}</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item >
              <Link className='nav-link' to= "/Profile">Profile</Link>
            </NavDropdown.Item>
            <NavDropdown.Divider></NavDropdown.Divider>
            <NavDropdown.Item >
            <p className='nav-link' onClick={logoutHandler}>Logout</p>
              </NavDropdown.Item>
          </NavDropdown>
  
  </> :<>
  <Link  className = 'nav-link 'to = "/Signup">Sign up</Link>
<Link className='nav-link' to = "/login">Log In</Link>
</>
    }

  </Nav>

          </Navbar>


  
          
          </Container>
        </Navbar>
        </>
      );
    }
    
    


export default Navigation;