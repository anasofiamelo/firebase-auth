import React, { createContext, useState, useContext } from 'react';
//firebase imports
import { auth, db } from '../firebase-config'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";

import { useNavigate } from 'react-router-dom'

const UserContext = createContext({})

export function UserProvider({children}) {

  const navigate = useNavigate()

  const [user, setUser] = useState({})
  const [isLogged, setIsLogged] = useState(false)

  //função que registra o usuário
  async function registerUser(name, email, password, age, gender){
      try {
          const user = await createUserWithEmailAndPassword(
            auth, 
            email, 
            password);
            console.log(user.user);
            
            await setDoc(doc(db, "users", user.user.uid), { 
              name: name, 
              email: email, 
              age: age, 
              gender: gender
            });
            
        } catch (error) {
          console.log(error.message);
        }
  }

  //função que loga o usuário
  async function loginUser(email, password){
      try {
          const user = await signInWithEmailAndPassword(
            auth,
            email,
            password
          );
          getUserInfo(user.user.uid)
          navigate(`/home/${user.user.uid}`)
        } catch (error) {
          console.log(error.message);
        }
  }

  //função que busca as informações do usuário no firestore
  async function getUserInfo(userId){
    const userInfo = await getDoc(doc(db, "users", userId))
    if (userInfo) {
      console.log(userInfo.data())
      setUser(userInfo.data())
    } else {
      console.log('n existe')
    }
  }

  return (
      <UserContext.Provider value={{user, registerUser, loginUser, isLogged, getUserInfo}}>
          {children}
      </UserContext.Provider>
  )
}

//função p/ facilitar as telas Login e Register de puxarem as funções de login/register
export function useUser(){
    const context = useContext(UserContext)
    return context
}

export default UserContext