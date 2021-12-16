import React, { useEffect, useState } from 'react'
import CustomMoneyBox from '../../customComponents/CustomMoneyBox/CustomMoneyBox'
import './BuySell.css';
import { GLOBAL_URL } from '../../global/Constant';
import axios from 'axios';
import Loader from '../../customComponents/Loader/Loader';
import useAuth from '../../config/AuthContext';
import useToken from '../../config/useToken';

function BuySell() {

    const {user} = useAuth();
    const {getToken} = useToken()
    const [subscription, setSubscription] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [paymentLoading, setPaymentLoading] = useState(true);

    const makePayment = async () => {
        await axios.post(`${GLOBAL_URL}/billing/`, {
            "amount": 1000,
            "username": `${user.first_name}`,
        }, {
            headers: {
                "Authorization": `Token ${getToken()}`,
                "Accept": "application/json",
                "Content-Type": "application/json",
            }
        })
        .then(async(response) => {
            const finRes = await response.json();
            var options = {
                "key": "rzp_test_240llZpXCqHDn1", // Enter the Key ID generated from the Dashboard
                "amount": `${finRes.data.amount}`, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise    
                "currency": "INR",   
                "name": "Tracerz",
                "description": "Recharge your account",
                "order_id": `${finRes.data.id}`, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1    
                "callback_url": "https://taiyoindustries.herokuapp.com/api/success-payment/",
                "prefill": {
                    "name": `${user.first_name}`,
                    "email": `${user.email}`,
                    "contact": `${user.phone_number}`
                }
            };
            var rzp1 = new window.Razorpay(options);
            if (finRes.data.id !== null) {
                rzp1.open();
            }
        }).catch(async(error) => {
            console.log(error.response)
        });
    }

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
                            <CustomMoneyBox key={sub.id} name={sub.name} loading={paymentLoading} setLoading={setPaymentLoading} onClick={makePayment} amount= {sub.amount} days={sub.days} />
                        )
                    )
            } 
        </div>
    )
}

export default BuySell
