import React, { useEffect, useState } from "react";
import "./CountDown.css";

const CountDown = ({ time, styleClass }) => {
    const [d, setD] = useState(0);
    const [h, setH] = useState(0);
    const [m, setM] = useState(0);
    const [s, setS] = useState(0);

    function updateTimer() {
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
            <div className={`${styleClass ? "countdown_timer_div_small" : `countdown_timer_div`} auth-bg`}>
                <div className="d-flex justify-content-center px-2">
                    {` ${d} Days`}
                </div>
            </div>
            <div className={`${styleClass ? "countdown_timer_div_small" : `countdown_timer_div`} auth-bg`}>
                <div className="d-flex justify-content-center px-2">
                    {` ${h} Hrs`}
                </div>
            </div>
            <div className={`${styleClass ? "countdown_timer_div_small" : `countdown_timer_div`} auth-bg`}>
                <div className="d-flex justify-content-center px-2">
                    {` ${m} Min`}
                </div>
            </div>
            <div className={`${styleClass ? "countdown_timer_div_small" : `countdown_timer_div`} auth-bg`}>
                <div className="d-flex justify-content-center px-2">
                    {` ${s} Sec`}
                </div>
            </div>
        </div>
    );
};

export default CountDown;
