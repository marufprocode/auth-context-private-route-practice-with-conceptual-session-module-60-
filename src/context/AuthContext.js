import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, updateProfile, onAuthStateChanged, signInWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from '../firebase/firebase.config'

const auth = getAuth(app);


export const AuthContexts = createContext();

const AuthContext = ({children}) => {
    const [user, setUser] = useState({});
    const [signUpError, setSignUpError] = useState(false);
    const [signUpStatus, setSignUpStatus] = useState(false);
    const [loginError, setLoginError] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();

    const SignUp = (email, password, name) => {
        setLoading(true);
        return (
            createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                setSignUpError(null);
                setSignUpStatus(true);
                console.log(user);
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                    // Profile updated!
                    console.log('Profile updated!');
                  }).catch((error) => {
                    // An error occurred
                    console.error('error', error);
                  });               
            })
            .catch((error) => {
                setSignUpError(error.code);
                setSignUpStatus(false);
                console.error('error', error);
            })
        )
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }

    const logOut = () => {
        setLoading(true);
        return (
            signOut(auth).then(() => {
                console.log('Sign-out successful');
              }).catch((error) => {
                console.error('error', error);
              })              
        )
    }

    useEffect(()=> {
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
            setLoading(false);
            console.log(user);
          });
          
        return ()=> unSubscribe();
    }, [])

    const authInfo = {SignUp, user, signUpError, setSignUpError, signUpStatus, setSignUpStatus, signIn, logOut, loginError, signInWithGoogle, loading, setLoginError}
    return (
        <AuthContexts.Provider value={authInfo}>
            {children}
        </AuthContexts.Provider>
    );
};

export default AuthContext;