import React from 'react';
import { createContext } from 'react';
import app from '../firebase.config';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';


export const AuthContext = createContext(null)
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        });
    }

    const login = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
        
            if(currentUser){
                axios.post('https://assignment-12-server-xi-fawn.vercel.app/jwt', {email: currentUser?.email})
                .then(data=>{
                    // console.log(data.data)
                    localStorage.setItem('access-token', data?.data?.token)
                    setLoading(false)
                })
            }
            else{
                localStorage.removeItem('access-token')
            }


        })
        return () => {
            return unsubscribe;
        }
    }, [])

    const authInfo = {
        user,
        createUser,
        login,
        updateUserProfile,
        googleSignIn,
        loading,
        logOut,


    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;