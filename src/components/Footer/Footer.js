import axios from 'axios';
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import useAuth from '../../config/AuthContext';
import { GLOBAL_URL } from '../../global/Constant';
import "./Footer.css"

function Footer() {

    const {generalInfo} = useAuth();
    console.log(generalInfo)

    const [email, setEmail] = useState("");

    const addNewsletter = async () => {
        await axios.post(`${GLOBAL_URL}/news-letter`, {
            "email": email
        }).then(res => alert(res))
    }

    return (
        <div className="footer-dark">
            <footer>
                <div className="container mt-3">
                    <div className="row">
                        <div className="col-md-3 item text">
                            <h3>TAYIO</h3>
                            <p>{generalInfo.intro}</p>
                        </div>
                        <div className="col-md-6 item text">
                            <h3>Weekly Newsletter</h3>
                            <p className="mb-4"> We may send you information about related events, webinars, products and services wich we believe.</p>
                            <div className="row">
                                <div className="col-12 container__email">
                                    <span className="container__emailInput">
                                        <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} className="InputEmail rounded" placeholder="Enter Email" />
                                    </span>
                                    <button disabled={!email} onClick={addNewsletter} className="btn btn-secondary SubmitBtn" >Send</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-3 item">
                            <h3>Quick Links</h3>
                            <ul>
                                <li><NavLink to="/about">About Us</NavLink></li>
                                <li><NavLink to="/contact">Contact Us</NavLink></li>
                                <li><NavLink to="/">Terms and Conditons</NavLink></li>
                                <li><NavLink to="/">Privacy policy</NavLink></li>
                            </ul>
                        </div>
                        <div className="col item social">
                            <a href="/"><i className="icon ion-social-facebook"></i></a>
                            <a href="/"><i className="icon ion-social-twitter"></i></a>
                            <a href="/"><i className="icon ion-social-linkedin"></i></a>
                        </div>
                    </div>
                    <p className="copyright">TAYIO © 2018</p>
                </div>
            </footer>
        </div>
    )
}

export default Footer
