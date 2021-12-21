import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import useAuth from "../../config/AuthContext";
import "./Footer.css";
import { postNewsLetter } from "../../global/Function";
import ScrollButton from "../../customComponents/ScrollUp/ScrollUp";

function Footer() {
    const { generalInfo } = useAuth();

    const [email, setEmail] = useState("");
    return (
        <div className="footer-dark ">
            <footer>
                <div className="container-fluid mt-2 text-center">
                    <div className="row">
                        <div className="col-md-3 item text">
                            <h3>TAYIO</h3>
                            <p>{generalInfo.intro}</p>
                            <div className="col item social container__email">
                                <a href="https://m.facebook.com/TAIYO-APEX-111558011363554/?_rdr">
                                    <i className="icon ion-social-facebook"></i>
                                </a>
                                <a href="/">
                                    <i className="icon ion-social-twitter"></i>
                                </a>
                                <a href="/">
                                    <i className="icon ion-social-linkedin"></i>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-6 item text">
                            <h3>Weekly Newsletter</h3>
                            <p className="mb-4">
                                {" "}
                                We may send you information about related
                                events, webinars, products and services wich we
                                believe.
                            </p>
                            <div className="row">
                                <div className="col-12 container__email">
                                    <span className="container__emailInput">
                                        <input
                                            type="email"
                                            value={email}
                                            onChange={(event) =>
                                                setEmail(event.target.value)
                                            }
                                            className="InputEmail rounded"
                                            placeholder="Enter Email"
                                        />
                                    </span>
                                    <button
                                        disabled={!email}
                                        onClick={() => postNewsLetter(email)}
                                        className="btn btn-secondary SubmitBtn"
                                    >
                                        Send
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-3 item">
                            <h3>Quick Links</h3>
                            <ul>
                                <li>
                                    <NavLink to="/about">About Us</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/contact">Contact Us</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/terms-and-conditions">
                                        Terms and Conditons
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/privacy-policy">
                                        Privacy policy
                                    </NavLink>
                                </li>
                                <li>
                                    <a href="https://github.com/triangular-opensource/Taiyo-Front/issues">
                                        Issues
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="row">
                        <p className="col-sm-12 copyright ">TAYIO © 2018</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
