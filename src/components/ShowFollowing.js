import React ,{useState} from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Image } from "react-bootstrap";
import DisplayUsers from "./DisplayUsers";
import SearchBar from "./SearchBar";
import {useSearchValue} from "./contexts/SearchValueContext";


const ShowFollowing = ({users, mainUser, ShowFollowing, setShowFollowing})=>{

    const {searchValue} = useSearchValue();
    

    const following = users.filter((user)=>{

        return mainUser.following.includes(user.id);
    })


    return<>
    
 <Modal
      
      size="lg"
      show={ShowFollowing}
      onHide={() => setShowFollowing(false)}
      aria-labelledby="example-modal-sizes-title-lg"
    >

<Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
       
        <Image className="m-1"
                src={mainUser.photoURL}
                roundedCircle
                width={40}
                height={40}
              />
              {mainUser.name}

          
        </Modal.Title>
      </Modal.Header>


      <Modal.Body>
      <SearchBar/>
   
   <DisplayUsers searchValue= {searchValue} users={following}/>
       
   
       
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={()=> setShowFollowing(false)}>Close</Button>
      </Modal.Footer>
    </Modal>
    
    </>
}

export default ShowFollowing;