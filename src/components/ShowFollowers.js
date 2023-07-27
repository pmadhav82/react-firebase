import React ,{useState} from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import DisplayUsers from "./DisplayUsers";
import SearchBar from "./SearchBar";
import {useSearchValue} from "./contexts/SearchValueContext";
const ShowFollowers = ({users, mainUser, onHide})=>{
    const {searchValue} = useSearchValue();
    const [lgShow, setLgShow] = useState(false);

  

const followers = users.filter((user)=>{
return mainUser.followers.includes(user.id);
})


    return<>
        <Button onClick={() => setLgShow(true)}>Large modal</Button>
 <Modal
      
      size="lg"
      show={lgShow}
      onHide={() => setLgShow(false)}
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
        <Button onClick={()=> setLgShow(false)}>Close</Button>
      </Modal.Footer>
    </Modal>
    
    </>


}
export default ShowFollowers;