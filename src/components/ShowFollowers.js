import React  from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Image } from "react-bootstrap";
import DisplayUsers from "./DisplayUsers";
import SearchBar from "./SearchBar";
import {useSearchValue} from "./contexts/SearchValueContext";
const ShowFollowers = ({users, mainUser, showFollowers, setShowFollowers})=>{
    const {searchValue} = useSearchValue();
    
  

const followers = users.filter((user)=>{
return mainUser.followers.includes(user.id);
})


    return<>
      
 <Modal
      
      size="lg"
      show={showFollowers}
      onHide={() => setShowFollowers(false)}
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
   
   <DisplayUsers searchValue= {searchValue} users={followers}/>
       
   
       
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={()=> setShowFollowers(false)}>Close</Button>
      </Modal.Footer>
    </Modal>
    
    </>


}
export default ShowFollowers;