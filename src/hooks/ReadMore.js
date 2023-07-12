import React, {useState} from "react";
import { Button } from "react-bootstrap";

const ReadMore = ({children})=>{
const[readMore, setReadMore] = useState(true);

const toggleReadMore = ()=>{
    setReadMore(!readMore);
}


    return<>

    {children.length>150 && window.innerWidth<720? <>
    
{readMore? children.slice(0,150):children}
<Button variant="Link" className="btn btn-link" size="sm" onClick={toggleReadMore}>

    {readMore? " ...Read more": " Show less"}
    </Button>    
    
    
    </>:<>{children}</>}
    </>
}

export default ReadMore;