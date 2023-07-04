import React, { useEffect, useState } from 'react'
import './Package.css';
import { GLOBAL_URL } from '../../global/Constant';
import axios from 'axios';
import Loader from '../Customs/Loader/Loader';
import PackageItem from "./PackageItem/PackageItem"
import useAuth from '../../config/AuthContext';
import useToken from '../../config/useToken';
import alertMessage from '../../global/AlertProvider';

const Package = () => {
    const {getToken, userData} = useToken()
    const [subscription, setSubscription] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [paymentLoading, setPaymentLoading] = useState(true);

    const [buySellLoading, setBuySellLoading] = useState(false);

    const makePayment = async (amount, subscription) => {
        setBuySellLoading(true);
        await axios.post(`${GLOBAL_URL}/billing`, {
            "amount": amount,
            "package": subscription,
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
                "amount": `${amount}`, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise    
                "currency": "INR",   
                "name": "Taiyo",
                "description": "Recharge your account",
                "order_id": `${finRes.data.data.order_id}`, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1    
                "callback_url": `${GLOBAL_URL}/success-payment`,
                "prefill": {
                    "name": `${userData().first_name} ${userData().last_name}`,
                    "email": `${userData().email}`,
                    "contact": `+91${userData().phone_number}`
                }
            };
            var rzp1 = new window.Razorpay(options);
            if (finRes.data.id !== null) {
                setBuySellLoading(false);
                rzp1.open();
            }
            else
                setBuySellLoading(false);
        }).catch(async(error) => {
            console.log(error.response)
            setError(error)
            alertMessage("OOps Some error Ocurred in the payment gateway");
            setBuySellLoading(false);
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
                            <PackageItem key={sub.id} name={sub.name} loading={paymentLoading} setLoading={setPaymentLoading} onClick={() => makePayment(sub.amount, sub.id)} amount={sub.amount} days={sub.days} />
                        )
                    )
            } 
        </div>
    )
}

export default Package
