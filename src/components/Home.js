
import React from "react";
import { useAuth } from "./contexts/AuthContext";
import Welcome from "./Welcome";
import UploadForm from "./UploadForm";

const Home = ()=>{
  const {user}= useAuth();

    return(<>
  { !user && <Welcome/>}

    </>)

}

export default Home;