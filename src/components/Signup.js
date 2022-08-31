import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";



import {createUserWithEmailAndPassword, GoogleAuthProvider,  signInWithPopup ,getAuth} from "firebase/auth";
//import { auth } from "../fireConfig";

const Signup = ()=>{

 const provider = new GoogleAuthProvider();
const auth = getAuth();
const[disabled,setDisabled] = useState(false);

const navigate = useNavigate();

const [user,setSignUser] = useState({
  email: "",
  password: ""
});

const inputHandeler = (e)=>{
  setSignUser({...user,[e.target.name]:e.target.value})
}


const signInWithGoogle = async(e)=>{
  try{
    setDisabled(true);
await signInWithPopup(auth,provider);
setError("");
setDisabled(false);
navigate("/profile");
  } catch(er){
    setError(er.message)
  }

}




const [error, setError] = useState(null)


const  formHandeler = async (e)=>{
  e.preventDefault();
setDisabled(true);
  if( user.email.trim() === "" || user.password.trim()=== "")
  {setDisabled(false);
    return (setError("All fields are required to fill"))}
 
try{

   await createUserWithEmailAndPassword(auth, user.email,user.password);
setSignUser({

  email: "",
  password: ""
})
setError(null)

navigate("/profile");

}catch(er){
setError(er.message)

}
setDisabled(false)

}

    return( <>
   
    <div className="form-container">
     
  
      <div className="Auth-form">
        <h3 className="Auth-form-title m-1">Sign Up</h3>
        <div className="text-center m-2">
        Already registered?
              <span className="link-primary btn-group m-2">
              <Link  className = 'btn btn-primary'to = "/login">Sign In</Link>
             
              </span>

              {error && <div className="”alert error"> {error} </div>}

            </div>

            <form>
        <div className="form-group mt-1">
          <label>Email address</label>
          <input
            type="email" onChange={inputHandeler} value={user.email} name = "email"
            className="form-control mt-1"
            placeholder="Enter email"
          />
        </div>
        <div className="form-group mt-1">
          <label>Password</label>
          <input
          onChange={inputHandeler}
            type="password" value={user.password} name = "password"
            className="form-control  mt-1"
            placeholder="Enter password"
          />
        </div>
        <div className="d-grid gap-2 mt-3">
          <button disabled = {disabled} type="submit"onClick={formHandeler} className="btn btn-primary">
            Submit
          </button>
        </div>
      

    </form>

              <div className="btn-group">
            
      <button className="btn btn-secondary" onClick={signInWithGoogle}>Login with google</button>
    
           <Link to = "/passwordreset"  className="btn link"> Reset Password</Link>
        
      </div>
      </div>
    

  </div>
  
</>
    )}


export default Signup;