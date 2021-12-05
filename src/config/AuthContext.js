import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'
import axios from 'axios';
import { GLOBAL_URL } from '../global/Constant';
import Loader from '../components/Loader';
import "../static/css/Loader.css"
import { useHistory } from 'react-router';

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {

    const history = useHistory();

    const [error, setError] = useState(null);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [generalInfo, setGeneralInfo] = useState(null);
    const [address, setAddress] = useState(null);
    const [policy, setPolicy] = useState(null);
    const [authenticated, setAuthenticated] = useState(false);


    function signUp(email, password) {
        
    }

    async function login(email, password) {
        await fetch(`${GLOBAL_URL}/auth/login`, {
            method : "POST",
            body: JSON.stringify({
                "email": email,
                "password": password
            }),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(async (response) => await response.json())
        .then(async (result) =>  {
            setAuthenticated(true)
            localStorage.setItem("token", result.data.token)
            history.push("/")
        })
        .catch(async(error) => setError(await error));
    }

    function logout(value) {
        setAuthenticated(value);
        localStorage.clear();
        history.push("/login")
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

    const getTokenFromLocalStorage = () => {
        return localStorage.getItem("token")
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
        login,
        logout,
        user,
        loading,
        error,
        generalInfo,
        address,
        policy,
        authenticated,
    }), [user, loading, error, generalInfo, address, policy, authenticated]);

    return (
        <AuthContext.Provider value={memoedValue}>
            {loading ? <Loader /> : !loading && children}
        </AuthContext.Provider>
    )
}


export default function useAuth() {
    return useContext(AuthContext)
}
