import React, { createContext, useState, useContext } from 'react';

//firebase imports
import {signInWithEmailAndPassword} from "firebase/auth"
import { auth } from '../firebase-config'
import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { db } from '../firebase-config'
import { doc, setDoc } from "firebase/firestore";


const UserContext = createContext({})

export function UserProvider({children}) {

    const [user, setUser] = useState({})

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
            setUser(user.user);
            console.log(user);
          } catch (error) {
            console.log(error.message);
          }
    }

    onAuthStateChanged(auth, (currentUser) =>{
      setUser(currentUser);
    })

    return (
        <UserContext.Provider value={{user, registerUser, loginUser}}>
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