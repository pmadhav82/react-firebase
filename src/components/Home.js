import React from "react";
import { Link, Navigate } from "react-router-dom";
import { useAuth } from "./contexts/AuthContext";
const Home = ()=>{
  const {user}= useAuth();

    return(<>
  { user && <Navigate  to="/profile" replace />}


    </>)

}

export default Home;