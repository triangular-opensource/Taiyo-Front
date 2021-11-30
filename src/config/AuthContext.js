import React, { useContext, useEffect, useState } from 'react'
import { auth } from './Firebase';
import firebase from 'firebase/compat/app'
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from '@firebase/auth';

const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext)
}

const AuthProvider = ({ children }) => {

    const [currentUser, setCurrentUser] = useState(null)
    const [loading, setLoading] = useState(false)

    const value = {
        currentUser,
        signUp,
        login,
        logout,
        googleSignIn
    }

    function googleSignIn() {
        return signInWithPopup(new firebase.auth.GoogleAuthProvider())
    }

    function signUp(email, password) {
        return createUserWithEmailAndPassword(email, password)
    }

    function login(email, password) {
        return signInWithEmailAndPassword(email, password)
    }

    function logout() {
        return auth.signOut()
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setCurrentUser(user);
            } else {
                setCurrentUser(null);
            }
            setLoading(false);
        })}, []);

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}

export default AuthProvider
