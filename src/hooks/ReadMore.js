import React, {useState} from "react";
import { Button } from "react-bootstrap";

const ReadMore = ({children})=>{
const[readMore, setReadMore] = useState(true);

const toggleReadMore = ()=>{
    setReadMore(!readMore);
}


    return<>

    {children.length>150 && window.innerWidth<720? <>
    
{readMore? children.slice(0,100):children}
<button className="read-more-btn" onClick={toggleReadMore}>

{readMore? " ...Read more": " Show less"}
</button>

    
    </>:<>{children}</>}
    </>
}

export default ReadMore;