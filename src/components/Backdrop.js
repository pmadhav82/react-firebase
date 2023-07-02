import React from "react";

const Backdrop = ({doc, setPostDoc})=>{
 
    const closeModal = (e)=>{
        if(e.target.classList.contains("back-drop")){
            setPostDoc(null);
        }
    }

    return<>
<div className="back-drop" onClick={closeModal} >

<img alt="imaage" src= {doc.url} style={{maxWidth:"500px", width:"100%", margin:"1rem auto", maxHeight:"80%"}}/>

</div>

    </>
}
export default Backdrop;