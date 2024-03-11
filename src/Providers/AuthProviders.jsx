import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/Firebase.config';
import {GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'
export const AuthContext= createContext(null)



const AuthProviders = ({children}) => {
    const [user, setUser]= useState(null);
    const [loading, setLoading]= useState(true)

    const googleProvider= new GoogleAuthProvider();

    const createUser=(email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(Auth , email , password)
    }
    const SignIn=(email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword (Auth, email, password)
    }

    useEffect(()=>{
        const unsubcribe= onAuthStateChanged(Auth, (CurrentUser)=>{
            setUser(CurrentUser)
            setLoading(false)
            if(CurrentUser && CurrentUser.email){
                fetch('http://localhost:5000/jwtpractise',{
                    method : 'POST',
                    headers :{
                        'content-type' : 'application/json'
                    },
                    body : JSON.stringify({email: CurrentUser?.email})
                })
                .then(res=> res.json())
                .then(data=> {console.log(data)
                 localStorage.setItem("Auth-Token" , data.token)
                })
                
                
                .catch(error=>console.log(error))
            }
            else{
                localStorage.removeItem("Auth-Token")
            }
        })
        return ()=>{
            return unsubcribe()
        }
    },[])
    const googleLogIn= ()=>{
         setLoading(true)
         return signInWithPopup(Auth , googleProvider)
    }

    const logOut=()=>{
        setLoading(true)
        return signOut (Auth)
    }

    const Auth= getAuth(app)
    const userInfo={
      Auth,
      user,
      createUser ,
      SignIn,
      logOut,
      googleLogIn,
      loading
    }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;