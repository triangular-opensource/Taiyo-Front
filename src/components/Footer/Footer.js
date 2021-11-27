import React from 'react'
import "./Footer.css"

function Footer() {
    return (
        <div className="footer-dark">
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 item text">
                            <h3>TAYIO</h3>
                            <p>Largest Classified Market Place for 
                                steel, offers perfect classified Ads to sell your products.</p>
                        </div>
                        <div className="col-md-6 item text">
                            <h3>Weekly Newsletter</h3>
                            <p className="mb-4"> We may send you information about related events, webinars, products and services wich we believe.</p>
                            <span className="container__email">
                                <input type="email" className="InputEmail rounded" placeholder="Enter Email" />
                            </span>
                            <button className="btn btn-secondary SubmitBtn" >Send</button>
                        </div>
                        <div className="col-sm-6 col-md-3 item">
                            <h3>Quick Links</h3>
                            <ul>
                                <li><a href="/">About Us</a></li>
                                <li><a href="/">Contact Us</a></li>
                                <li><a href="/">Terms and Conditons</a></li>
                                <li><a href="/">Privacy policy</a></li>
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
