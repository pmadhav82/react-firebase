import React from "react";
import { useParams } from "react-router-dom";


const UserPage = ()=>{
const {id} = useParams();



    return<>
    <h2>This is user page !</h2>
    </>
}

export default UserPage;
