import React, { useState } from "react";

import  "./Sidebar.css";


import { Image, Container} from "react-bootstrap";

const FilePreview = ({file})=>{

const [imageUrl, setImageUrl] = useState(null);



let fileReader = new FileReader();
fileReader.onload =(e)=>{
    const {result} = e.target;
    if(result){
        setImageUrl(result);
    }
}

fileReader.readAsDataURL(file);

    return<>
<Container className="d-flex  flex-column align-items-center ">

<Image src={imageUrl} alt="242x200"  rounded fluid
                width={342}
                height={300} />            
</Container>

    </>
}

export default FilePreview;