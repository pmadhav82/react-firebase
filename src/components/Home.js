import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "./contexts/AuthContext";
const Home = ()=>{
  const {user}= useAuth();

    return(<>
  
  <main className="homePage">
    {!user &&  <><div className="title">
<h2>FireStore</h2>
<div className="btn-group">
  <Link className='btn btn-primary' role="button" to = "/login">Log In</Link>
  <Link  className = 'btn btn-success' role="button" to = "/Signup">Sign up</Link>
</div>
 </div>
 <div className="intro">
<h4>Looking for place to store your file on the cloud</h4>
<h5>Your are in a right place. FireStore provides all solution of cloud storage</h5>

 </div>
 </>
   }
   
 
  </main>


    </>)

}

export default Home;