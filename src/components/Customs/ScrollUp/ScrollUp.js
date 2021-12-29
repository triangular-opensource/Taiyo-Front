import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const ScrollButton = () => {
    const [visible, setVisible] = useState(true);

    const location = useLocation();

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisible(true);
        } else if (scrolled <= 300) {
            setVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    window.addEventListener("scroll", toggleVisible);

    return (
        <>
        {
            location.pathname === "/pdf"
            ? <></>
            : (
                <div
                    onClick={scrollToTop}
                    style={{
                        "display": visible ? "block" : "none",
                        "position": "fixed",
                        "bottom": "15px",
                        "right": "10px",
                        "background": "#504d4d",
                        "padding": "0px 15px 0px 15px",
                        "fontSize": "xx-large",
                        "borderRadius": "10%",
                        "color": "white"
                    }}
                    >
                    <i className="icon ion-arrow-up-c"></i>
                </div>
            )
        }
        </>
    );
};

export default ScrollButton;
