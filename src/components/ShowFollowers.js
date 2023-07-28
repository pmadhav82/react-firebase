import React ,{useState} from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import DisplayUsers from "./DisplayUsers";
import SearchBar from "./SearchBar";
import {useSearchValue} from "./contexts/SearchValueContext";
const ShowFollowers = ({users, mainUser, showModal, setShowModal})=>{
    const {searchValue} = useSearchValue();
    
  

const followers = users.filter((user)=>{
return mainUser.followers.includes(user.id);
})


    return<>
      
 <Modal
      
      size="lg"
      show={showModal}
      onHide={() => setShowModal(false)}
      aria-labelledby="example-modal-sizes-title-lg"
    >

<Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Followers of {mainUser.name}
        </Modal.Title>
      </Modal.Header>


      <Modal.Body>
      <SearchBar/>
   
   <DisplayUsers searchValue= {searchValue} users={followers}/>
       
   
       
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={()=> setShowModal(false)}>Close</Button>
      </Modal.Footer>
    </Modal>
    
    </>


}
export default ShowFollowers;