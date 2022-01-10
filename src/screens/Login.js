import React, { useState } from "react"
//context import 
import { useUser } from '../contexts/user'

function Login(){
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const context = useUser()
  
  async function LoginUser(){
    context.loginUser(loginEmail, loginPassword)
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
            <button onClick = {LoginUser} className = "button-format" type = "submit" id = "btnSignin">Login</button>
        </div>
    )
}

export default Login
