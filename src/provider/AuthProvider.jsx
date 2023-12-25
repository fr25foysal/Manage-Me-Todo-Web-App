import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from '../configs/firebase.config'

export const contextProvider= createContext(null)
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser=(email,password) => {
        setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
    }
    const SignInUser = (email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    } 
    
    const updateUser = (name,photo)=>{
        return updateProfile(auth.currentUser,{
            displayName: name, photoURL: photo
        })
    }

    
     // Google Login
     const googleProvider = new GoogleAuthProvider()
     const googleLogin = ()=>{
         setLoading(true)               
         return signInWithPopup(auth,googleProvider)
     }

     // Log out user 
     const logOut =()=>{
        return signOut(auth)
    }

    useEffect(()=>{
        onAuthStateChanged(auth,nowUser=>{
            setUser(nowUser)
            setLoading(false)
        })
    })
    
    const values = {
        user,loading,logOut,googleLogin
        ,createUser,SignInUser,updateUser
    }
    return (
        <contextProvider.Provider value={values}>
            {children}
        </contextProvider.Provider>
    );
};

export default AuthProvider;