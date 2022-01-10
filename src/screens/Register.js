import React, { useState } from "react"

import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { db } from '../firebase-config'
import { auth } from '../firebase-config'
import { collection, doc, setDoc } from "firebase/firestore";

function Register(){

    const [user, setUser] = useState({});
    
    const [registerName, setRegisterName] = useState("");
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [registerAge, setRegisterAge] = useState("");
    const [registerGender, setRegisterGender] = useState("");

    const usersCollection = collection(db, "users");
  
    onAuthStateChanged(auth, (currentUser) =>{
      setUser(currentUser);
    })
  
    const registerUser = async () => {
      try {
        const user = await createUserWithEmailAndPassword(
          auth, 
          registerEmail, 
          registerPassword);
          console.log(user.user);

          await setDoc(doc(db, "users", user.user.uid), { 
            name: registerName, 
            email: registerEmail, 
            age: registerAge, 
            gender: registerGender
          });

      } catch (error) {
        console.log(error.message);
      }
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