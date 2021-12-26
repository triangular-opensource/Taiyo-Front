import React, { useEffect, useState } from 'react'
import './CountDown.css'

const CountDown = ({time}) => 
{
    const [d, setD] = useState(0)
    const [h, setH] = useState(0)
    const [m, setM] = useState(0)
    const [s, setS] = useState(0)
    
    function updateTimer()
    {
        let future = new Date(time);
        let now = new Date();
        let diff = future - now;
        let days = Math.floor(diff / (1000 * 60 * 60 * 24));
        let hours = Math.floor(diff / (1000 * 60 * 60));
        let mins = Math.floor(diff / (1000 * 60));
        let secs = Math.floor(diff / 1000);
        setD(days);
        setH(hours - days * 24);
        setM(mins - hours * 60);
        setS(secs - mins * 60);
    }

    useEffect(() => {
        updateTimer();
    });
  
    setInterval(() => {
        updateTimer();
    }, 1000);


    return (
 
        <div className="timer">
        <div className='countdown_timer_div auth-bg'> {d} <span> Days </span></div>
        <div className='countdown_timer_div auth-bg'> {h} <span> Hours </span></div>
        <div className='countdown_timer_div auth-bg'> {m} <span> Minutes </span></div>
        <div className='countdown_timer_div auth-bg'> {s} <span> Seconds </span></div>
        </div>          
    )
}

export default CountDown
