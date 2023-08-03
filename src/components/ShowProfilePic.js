import React from "react";
import { Modal, Button } from "react-bootstrap";

const ShowProfilePic = ({photoUR0L, ShowProfilePic, setShowProfilePic})=>{


    return<>

    <Modal   size="lg"
   
      show={ShowProfilePic}
      onHide={() => setShowProfilePic(false)}
      aria-labelledby="example-modal-sizes-title-lg">
    <Modal.Body closeButton>

<div className = "profile-picture">
<img src={photoUR0L} alt="profile-picture"/>
   
</div>

    </Modal.Body>
    <Modal.Footer>
        <Button onClick={()=> setShowProfilePic(false)}>Close</Button>
      </Modal.Footer>
    


    </Modal>
    </>
}

export default ShowProfilePic;