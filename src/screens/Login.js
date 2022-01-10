import React, { useState } from "react"
import {signInWithEmailAndPassword} from "firebase/auth"
import { auth } from '../firebase-config'

function Login(){

  const [user, setUser] = useState({});

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");


  const login = async () => {
      try {
        const user = await signInWithEmailAndPassword(
          auth,
          loginEmail,
          loginPassword
        );
        setUser(user.user);
        console.log(user);
      } catch (error) {
        console.log(error.message);
      }
  }

    return(
        <div>
          <br/>
            <h1> Login </h1>
            <input 
                className = "input-format" 
                type = "text" 
                id = "txtemail" 
                placeholder = "E-mail" 
                onChange = {(event) =>{ 
                    setLoginEmail(event.target.value);
            }}/><br/>
            <input 
                className = "input-format" 
                type = "password" 
                id = "txtPassword" 
                placeholder = "Password"
                onChange = {(event) =>{
                    setLoginPassword(event.target.value);
            }}/><br/>

            <a href="/register" className = "button-format"> Create a new account </a>
            <button onClick = {login} className = "button-format" type = "submit" id = "btnSignin">Login</button>
        </div>
    )
}

export default Login
