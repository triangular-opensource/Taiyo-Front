import React, { createContext, useContext, useEffect, useMemo, useReducer, useState } from 'react'
import axios from 'axios';
import { GLOBAL_URL } from '../global/Constant';
import Loader from '../customComponents/Loader/Loader';
import { useHistory } from 'react-router';
import useToken from './useToken';
import { initialState, reducer } from './useReducer';

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {

    const history = useHistory();
    const {saveToken} = useToken();
    const [error, setError] = useState(null);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [generalInfo, setGeneralInfo] = useState(null);
    const [address, setAddress] = useState(null);
    const [policy, setPolicy] = useState(null);
    const [subscription, setSubscription] = useState(null);


    function regiser(email, password) {
        
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
            saveToken(result.data.token)
            dispatch({type: "USER", payload:true})
            history.push("/")
        })
        .catch(async(error) => setError(await error));
    }
    
    async function logout() {
        saveToken(null)
        dispatch({type: "USER", payload:false})
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


    const getSubscription = async () => {
        await fetch(`${GLOBAL_URL}/subscription`, {
            method: "GET"
        })
        .then(async (response) => await response.json())
        .then(async (result) => setSubscription(await result.data))
        .catch(async(error) => setError(await error));
    }

    useEffect(() => {
        const fun = async () => {
            setLoading(true);
            await getGeneralInfo();
            await getAddress();
            await getPolicy();
            await getSubscription();
            setLoading(false);
        }
        fun();
    }, []);

    const [state, dispatch] = useReducer(reducer, initialState)

    const memoedValue = useMemo(() => ({
        login,
        logout,
        user,
        loading,
        error,
        generalInfo,
        address,
        policy,
        state,
        subscription,
        dispatch,
    }), [user, loading, error, generalInfo, address, policy, state , subscription]);

    return (
        <AuthContext.Provider value={memoedValue}>
            {loading ? <Loader /> : !loading && children}
        </AuthContext.Provider>
    )
}


export default function useAuth() {
    return useContext(AuthContext)
}
