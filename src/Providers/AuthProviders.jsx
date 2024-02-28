import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/Firebase.config';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword} from 'firebase/auth'
export const AuthContext= createContext(null)



const AuthProviders = ({children}) => {
    const [user, setUser]= useState(null);
    const [loading, setLoading]= useState(true)

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
        })
        return ()=>{
            return unsubcribe()
        }
    },[])

    const Auth= getAuth(app)
    const userInfo={
      Auth,
      user,
      createUser ,
      SignIn
    }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;