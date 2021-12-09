import React, { useEffect, useState } from 'react'
import CustomMoneyBox from '../../customComponents/CustomMoneyBox/CustomMoneyBox'
import './BuySell.css';
import { GLOBAL_URL } from '../../global/Constant';
import axios from 'axios';
import Loader from '../../customComponents/Loader/Loader';

function BuySell() {

    const [subscription, setSubscription] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const getSubscription = async () => {
            await axios.get(`${GLOBAL_URL}/subscription`)
            .then(async (respomse) => {
                setSubscription(respomse.data.data);
                setLoading(false)
            })
            .catch(async (error) => setError(error))
        }
        getSubscription();
    }, []);
    

    return (
        <div className="BuySell__Container">
            {
                loading 
                ? 
                    <Loader />
                :
                    subscription.map(
                        sub => (
                            <CustomMoneyBox key={sub.id} name={sub.name} amount= {sub.amount} days={sub.days} />
                        )
                    )
            } 
        </div>
    )
}

export default BuySell
