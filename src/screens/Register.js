import React, { useState } from "react"
//context import
import { useUser } from '../contexts/user'

function Register(){

  const [registerName, setRegisterName] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [registerAge, setRegisterAge] = useState("");
  const [registerGender, setRegisterGender] = useState("");

    const context = useUser()
  
    const registerUser = async () => {
      context.registerUser(registerName, registerEmail, registerPassword, registerAge, registerGender)
    };
  
    const HandleChange = (event) => {
        setRegisterGender(event.target.value);
    }

    return(
      <div>

        <h1> Register </h1>

        <input 
            className = "input-format" 
            type = "text" 
            id = "txtName" 
            placeholder = "Name" 
            onChange = {(event) =>{
              setRegisterName(event.target.value);
            }}/><br/>

          <input 
            className = "input-format" 
            type = "text" 
            id = "txtEmail" 
            placeholder = "E-mail" 
            onChange = {(event) =>{
              setRegisterEmail(event.target.value);
            }}/><br/>

          <input 
            className = "input-format" 
            type = "password" 
            id = "txtPassword" 
            placeholder = "Password"
            onChange = {(event) =>{
              setRegisterPassword(event.target.value);
            }}/><br/>

          <input 
            className = "input-format" 
            type = "number" 
            id = "age" 
            placeholder = "Idade"
            onChange = {(event) =>{
              setRegisterAge(event.target.value);
            }}/><br/>

          <input 
            className = "radio-format" 
            type = "radio" name = "gender" 
            value = "male" 
            id = "gender"
            onChange = {HandleChange}
            ></input><span>Masculino</span>

          <input 
            className = "radio-format" 
            type = "radio" 
            name = "gender" 
            value = "female" 
            id = "gender"
            onChange = {HandleChange}
            ></input><span>Feminino</span>

          <input 
            className = "radio-format" 
            type = "radio" 
            name = "gender" 
            value = "another" 
            id = "gender"
            onChange = {HandleChange}
            ></input><span>Outros</span><br/>

          <button 
            onClick = {registerUser} 
            className = "button-format" 
            type = "submit" 
            id = "btnSignin"
            >Cadastrar</button>
          <hr/>

      </div>
    )
}

export default Register