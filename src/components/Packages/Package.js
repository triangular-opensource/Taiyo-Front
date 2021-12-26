import React, { useEffect, useState } from 'react'
import './Package.css';
import { GLOBAL_URL } from '../../global/Constant';
import axios from 'axios';
import Loader from '../Customs/Loader/Loader';
import PackageItem from "./PackageItem/PackageItem"
import useAuth from '../../config/AuthContext';
import useToken from '../../config/useToken';

const Package = () => {
    const {user} = useAuth();
    const {getToken} = useToken()
    const [subscription, setSubscription] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [paymentLoading, setPaymentLoading] = useState(true);

    const makePayment = async () => {
        await axios.post(`${GLOBAL_URL}/billing`, {
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
            const finRes = response.data;
            var options = {
                "key": "rzp_test_240llZpXCqHDn1", // Enter the Key ID generated from the Dashboard
                "amount": `1000`, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise    
                "currency": "INR",   
                "name": "Taiyo",
                "description": "Recharge your account",
                "order_id": `${finRes.data.data.order_id}`, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1    
                "callback_url": "https://taiyoindustries.herokuapp.com/api/success-payment",
                "prefill": {
                    "name": `Alankar`,
                    "email": `saxenaalankar42@gmail.com`,
                    "contact": `+918750859034`
                }
            };
            var rzp1 = new window.Razorpay(options);
            if (finRes.data.id !== null) {
                rzp1.open();
            }
        }).catch(async(error) => {
            setError(error)
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
                            <PackageItem key={sub.id} name={sub.name} loading={paymentLoading} setLoading={setPaymentLoading} onClick={makePayment} amount= {sub.amount} days={sub.days} />
                        )
                    )
            } 
        </div>
    )
}

export default Package
