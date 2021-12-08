import React from 'react'
import CustomMoneyBox from '../../customComponents/CustomMoneyBox/CustomMoneyBox'
import useAuth from '../../config/AuthContext';
import './BuySell.css';
function BuySell() {


    const { subscription } = useAuth();
    return (
        <div className="BuySell__Container">
                {subscription.map(sub => <CustomMoneyBox name={sub.name} amount= {sub.amount} days={sub.days} />)} 
        </div>
    )
}

export default BuySell
