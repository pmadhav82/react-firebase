import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "./contexts/AuthContext";
import { createUserWithEmailAndPassword, updateProfile} from "firebase/auth";
import { auth } from "../fireConfig";
import {GoogleButton} from "react-google-button";
import { db } from "../fireConfig";
import { collection, addDoc, Timestamp } from "@firebase/firestore";

const Signup = ()=>{
const[disabled,setDisabled] = useState(false);
const navigate = useNavigate();
const {googleSignIn} = useAuth();

const [user,setSignUser] = useState({
  name: "",
  email: "",
  password: ""
});



// userRef
const userRef = collection(db,"userDetail");

const inputHandeler = (e)=>{
  setSignUser({...user,[e.target.name]:e.target.value})
}


const signInWithGoogle = async()=>{
  try{

    setDisabled(true);
    try{
       await googleSignIn();

    } catch(er){
      setError(er.message);
      setDisabled(false);
    }



navigate("/profile");

setError("");
setDisabled(false);
  } catch(er){
    setError(er.message)
  }

}




const [error, setError] = useState(null)


const  formHandeler = async (e)=>{
  e.preventDefault();
setDisabled(true);
  if( user.email.trim() === "" || user.password.trim()=== "" || user.name.trim()=== "")
  {setDisabled(false);
    return (setError("All fields are required to fill"))}
 
try{

   await createUserWithEmailAndPassword(auth, user.email,user.password);

   await updateProfile(auth.currentUser,{displayName: user.name})
   // save user data in userDetail collection
const mydoc = {
  created:Timestamp.now(),
  userName: user.name,
  userEmail: user.email
};

await addDoc(userRef,mydoc);

setSignUser({
name: "",
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
          <label>Name</label>
          <input
            type="text" onChange={inputHandeler} value={user.name} name = "name"
            className="form-control mt-1"
            placeholder="Enter name"
          />
        </div>

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
          <GoogleButton onClick = {signInWithGoogle}/>
      {/* <button className="btn btn-secondary" onClick={signInWithGoogle}>Login with google</button> */}
  
           {/* <Link to = "/passwordreset"  className="btn link"> Reset Password</Link> */}
        
      </div>
      </div>
    

  </div>
  
</>
    )}


export default Signup;