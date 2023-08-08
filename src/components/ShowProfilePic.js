import React from "react";
import { Modal, Button } from "react-bootstrap";
import { auth } from "../fireConfig";
import UploadProfilePicture from "./UploadProfilePicture";

const ShowProfilePic = ({user, ShowProfilePic, setShowProfilePic})=>{


    return<>

    <Modal   size="lg"
   
      show={ShowProfilePic}
      onHide={() => setShowProfilePic(false)}
      aria-labelledby="example-modal-sizes-title-lg">
    <Modal.Body >

<div className = "profile-picture">
<img src={user.photoURL} alt="profile"/>
   {auth.currentUser.uid === user.uid && <UploadProfilePicture/>}
</div>

    </Modal.Body>
    <Modal.Footer>
        <Button onClick={()=> setShowProfilePic(false)}>Close</Button>
      </Modal.Footer>
    


    </Modal>
    </>
}

export default ShowProfilePic;