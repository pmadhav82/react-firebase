import React, {useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import{auth} from "../fireConfig";
import GoogleButton from "react-google-button";
import { async } from "@firebase/util";
import { useAuth } from "./contexts/AuthContext";

const Login = ()=>{
const {googleSignIn} = useAuth();

const[disable,setDisable] = useState(false);
const navigate = useNavigate();
const [error, setError] = useState(null)
const [user,setLoginUser]= useState({
  email:"",
  password:""
})

const changeHandeler = (e)=>{
setLoginUser({...user, [e.target.name]:e.target.value})

}

const googleLogin = async ()=>{
    try{
      setDisable(true);
      await googleSignIn();
    
    }catch(er){
      setError(er.message)
    }
    setDisable(false)
        
}

const formHandeler = async (e)=>{
  e.preventDefault();
setDisable(true);
if(user.email.trim()=== "" || user.password.trim()=== ""){
  setDisable(false)
  return setError("All fields are required to fill");
}

try{

  await signInWithEmailAndPassword(auth,user.email,user.password)

  setLoginUser({email:"",
  password:""})
  setError(null);
  navigate("/profile");
}catch(er){

  setError(er.message);
}
setDisable(false);
}

    return( <div className="form-container">
    
      <div className="Auth-form">
    <form >

        <h3 className="Auth-form-title m-0">Sign In</h3>
        <div className="text-center">
              Not registered yet?
              <span className="link-primary">
              <Link  className = 'nav-link'to = "/Signup">Sign up</Link>
              </span>

            {error && <div className="”alert error"> {error} </div>}
            </div>
        <div className="form-group mt-1">
          <label>Email address</label>
          <input
            type="email"
            name="email"
            value={user.email}
            onChange = {changeHandeler}
            className="form-control mt-1"
            placeholder="Enter email"
          />
        </div>
        <div className="form-group mt-1">
          <label>Password</label>
          <input
          name="password"
          value={user.password}
          onChange = {changeHandeler}
            type="password"
            className="form-control  mt-1"
            placeholder="Enter password"
          />
        </div>
        <div className="d-grid gap-2 mt-3">
          <button type="submit" disabled ={disable} onClick={formHandeler} className="btn btn-primary">
            Submit
          </button>
        </div>
    </form>
    <GoogleButton className="m-2" onClick={googleLogin}/>
      </div>
   
  </div>)

}

export default Login;