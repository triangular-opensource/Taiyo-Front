import React from "react";
import useAuth from "../../config/AuthContext";
import AboutData from "../About/AboutData/AboutData";
import Contact from "../Contact/Contact";
import CountDown from "../Countdown/CountDown";

const Home = () => {
    const { generalInfo } = useAuth();
    return (
        <div>
            <img
                src={generalInfo.cover_image_link}
                style={{ width: "100%", height: "700px" }}
                alt="cover"
            />
            <div id="about">
                <AboutData about={generalInfo.about} />
            </div>
            <div id="contact">
                <Contact />
            </div>

            <div class = "container px-0 mb-3">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7543.3901131394!2d73.06411839320876!3d19.033154428467373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c21530000001%3A0x59690b2443c7e5bd!2sApex%20Marketing!5e0!3m2!1sen!2sin!4v1640499763845!5m2!1sen!2sin"
                style={{ border: "2" ,height: "400px" , width:"100%" , borderRadius:"1%" }}
                allowfullscreen=""
                loading="lazy"
            ></iframe>
            </div>
        </div>
    );
};

export default Home;
