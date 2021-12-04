import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { auth } from './Firebase';
import firebase from 'firebase/compat/app'
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from '@firebase/auth';
import axios from 'axios';
import { GLOBAL_URL } from '../global/Constant';
import Loader from '../components/Loader';
import "../static/css/Loader.css"

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {

    const [error, setError] = useState(null);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [generalInfo, setGeneralInfo] = useState(null);
    const [address, setAddress] = useState(null);
    const [policy, setPolicy] = useState(null);


    function googleSignIn() {
        return signInWithPopup(new firebase.auth.GoogleAuthProvider())
    }

    function signUp(email, password) {
        return createUserWithEmailAndPassword(email, password)
    }

    async function login(email, password) {
        await axios.post(`${GLOBAL_URL}/auth/login`, {
            "username": email,
            "password": password
        }, {
            headers: {
                "Content-Type": "application/json"
            },
        }).then(response => {
            console.log(response)
        } )
        return signInWithEmailAndPassword(email, password)
    }

    function logout() {
        return auth.signOut()
    }
    const getPolicy = async () => {
        await axios.get(`${GLOBAL_URL}/policy`, {
            headers: {
                "Content-Type": "application/json"
            }
        }).then(async (response) => {
            setPolicy(await response.data.data[0])
        }).catch(async (error) => setError(await error))
    }
    const getAddress = async () => {
        await axios.get(`${GLOBAL_URL}/address`, {
            headers: {
                "Content-Type": "application/json"
            }
        }).then(async (response) => {
            setAddress(await response.data.data[0])
        }).catch(async (error) => setError(await error))
    }
    const getGeneralInfo = async () => {
        await fetch(`${GLOBAL_URL}/general-info`, {
            method: "GET"
        })
        .then(async (response) => await response.json())
        .then(async (result) => setGeneralInfo(await result.data[0]))
        .catch(async(error) => setError(await error));
    }

    useEffect(() => {
        const fun = async () => {
            setLoading(true);
            await getGeneralInfo();
            await getAddress();
            await getPolicy();
            setLoading(false);
        }
        fun();
    }, []);

    const memoedValue = useMemo(() => ({
        user,
        loading,
        error,
        generalInfo,
        address,
        policy,
        login
    }), [user, loading, error, generalInfo, address, policy]);
    return (
        <AuthContext.Provider value={memoedValue}>
            {loading ? <Loader /> : !loading && children}
        </AuthContext.Provider>
    )
}


export default function useAuth() {
    return useContext(AuthContext)
}
