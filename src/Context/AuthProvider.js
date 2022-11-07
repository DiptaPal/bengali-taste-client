import React, { createContext, useState, useEffect } from 'react';
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, TwitterAuthProvider, updateProfile } from 'firebase/auth';
import app from '../Firebase/firebase.config';
export const AuthContext = createContext();


const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loader, setLoader] = useState(true);

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const twitterProvider = new TwitterAuthProvider();

    const singInWithGoogle = () => {
        setLoader(true)
        return signInWithPopup(auth, googleProvider)
    }

    const signInWithGithub = () => {
        setLoader(true)
        return signInWithPopup(auth, githubProvider)
    }

    const signInWithTwitter = () => {
        setLoader(true)
        return signInWithPopup(auth, twitterProvider)
    }

    const createUser = (email, password) => {
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const sendVerify = () => {
        setLoader(true)
        return sendEmailVerification(auth.currentUser)
    }

    const updateUserProfile = (profile) => {
        setLoader(true)
        return updateProfile(auth.currentUser, profile)
    }

    const passwordReset = (email) => {
        setLoader(true)
        return sendPasswordResetEmail(auth, email)
    }

    const logIn = (email, password) => {
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        setLoader(true)
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if(currentUser === null || currentUser.uid || currentUser.emailVerified) {
                setUser(currentUser)
            }
            setLoader(false)
        })
        return () => unsubscribe();
    },[])

    const authInfo = { user, loader, setLoader, singInWithGoogle, signInWithGithub, signInWithTwitter, createUser, updateUserProfile, sendVerify, logIn, logOut, passwordReset }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;