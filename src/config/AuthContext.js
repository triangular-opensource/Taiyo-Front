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
    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(true);
    const [generalInfo, setGeneralInfo] = useState(null);
    const [address, setAddress] = useState(null);
    const [policy, setPolicy] = useState(null);


    function regiser(email, password) {
        
    }

    const getUserData = async (token) => {
        await axios.get(`${GLOBAL_URL}/auth/user`, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${token}`
            }
        }).then(async (response) => {
            let data = [await response.data.data]
            setUser(data[0])
            localStorage.setItem("user", JSON.stringify(data[0]))
        }).catch(async (error) => setError(await error))
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
            getUserData(result.data.token)
            dispatch({type: "USER", payload:true})
            history.push("/")
        })
        .catch(async(error) => setError(await error));
    }
    
    async function logout() {
        saveToken("")
        dispatch({type: "USER", payload:false})
        localStorage.removeItem("user")
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

    useEffect(() => {
        const fun = async () => {
            setLoading(true);
            if (localStorage.getItem("token") !== "" && localStorage.getItem("user") !== "") {
                dispatch({type: "USER", payload:true})
            }
            await getGeneralInfo();
            await getAddress();
            await getPolicy();
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
        dispatch,
    }), [user, loading, error, generalInfo, address, policy, state]);

    return (
        <AuthContext.Provider value={memoedValue}>
            {loading ? <Loader /> : !loading && children}
        </AuthContext.Provider>
    )
}


export default function useAuth() {
    return useContext(AuthContext)
}
