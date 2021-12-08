import axios from "axios";
import React, { createContext, useContext, useEffect, useMemo, useState } from "react"
import { GLOBAL_URL } from "./Constant";

const GlobalDataContext = createContext({});

export const GlobalDataProvider = ({ children }) => {
    
    const [error, setError] = useState(null);
    const [generalInfo, setGeneralInfo] = useState(null);
    const [address, setAddress] = useState(null);
    const [policy, setPolicy] = useState(null);
    const [loading, setLoading] = useState(false);

    const memoedValue = useMemo(() => ({
        generalInfo,
        address,
        policy,
        loading, 
        error
    }), [generalInfo, loading, error, address, policy]);

    useEffect(() => {
        setLoading(true)
        const getGeneralInfo = async () => (
            await axios.get(`${GLOBAL_URL}/general-info`, {
                headers: {
                    "Content-Type": "application/json"
                }
            }).then(response => {
                setGeneralInfo(response.data.data)
            }).catch(error => setError(error))
            .finally(() => setLoading(false)))
        const getAddress = async () => (
            await axios.get(`${GLOBAL_URL}/address`, {
                headers: {
                    "Content-Type": "application/json"
                }
            }).then(response => {
                setAddress(response.data.data)
            }).catch(error => setError(error))
            .finally(() => setLoading(false)))
        const getPolicy = async () => (
            await axios.get(`${GLOBAL_URL}/policy`, {
                headers: {
                    "Content-Type": "application/json"
                }
            }).then(response => {
                setPolicy(response.data.data)
            }).catch(error => setError(error))
            .finally(() => setLoading(false)))
        getGeneralInfo();
        getAddress();
        getPolicy();
        setLoading(false);
    },[])

    return (
        <GlobalDataContext.Provider value={memoedValue}>
            {children}
        </GlobalDataContext.Provider>
    )
}

export default function useGlobalData() {
    return useContext(GlobalDataContext);
}