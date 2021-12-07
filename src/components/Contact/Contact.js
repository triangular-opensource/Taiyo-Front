import React from 'react'
import useAuth from '../../config/AuthContext'
import './Contact.css'
import CustomText from "../../customComponents/CustomText/CustomText"
import CustomInput from "../../customComponents/CustomInputField/CustomInput"
import CustomButton from "../../customComponents/CustomButton/CustomButton"
import { ReactComponent as ContactSvg } from "../../static/contact.svg";


function Contact() {

    const { generalInfo } = useAuth();

    return (       
        <div className="container py-5 my-4">
            <div className="row">
                <div className='col-md-5 text-center my-3'>
                    <ContactSvg />
                </div>
                <div className="col-md-7 my-2">
                    <CustomText name="GET IN TOUCH" color='black' size='xx-large' weight='bold'/> 
                    <div className="row">
                        <div className="col-6" >
                            <CustomInput type="text" placeholder='Name'/> 
                        </div>
                        <div className="col-6" >
                            <CustomInput type="email" placeholder='Email'/> 
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <CustomInput type="text" placeholder='Subject' />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <CustomInput type="text" placeholder='Message' height='160px'/>
                        </div>
                    </div>
                    <CustomButton fontSize="17" marginTop="20" data="Submit" handleClick={()=>({})} padding='16' backgroundColor='gray' color='white' width='620' />
                </div>
            </div>
        </div>
    )
}

export default Contact















{/* 
Hello I am contact
            <div className="">
                <br />
                <br />
                {generalInfo.email}
                <br />
                {generalInfo.contact}
            </div>
        </div> */}



                        {/* <div className="details">
                    <h3>Contact Us</h3>
                    <div className="contact-items-wrapper">
                        <div className="contact-items">
                            <span className="material-icons">location_on</span>
                            <p><strong>Address:</strong>Office No. 28 fisrt floor crystal plaza sector-7 Khargar Navi Mumbai Maharastra 410210 </p>
                        </div>
                        <div classname="contact-items">
                            <span classname="material-icons">local_phone</span>
                            <p><strong>Phone:</strong> +1-000-000-000</p>
                        </div>
                        <div className="contact-items">
                            <span className="material-icons">alternate_email</span>
                            <p><strong>Email:</strong><a href="#"> example@xyz.com</a> </p>
                        </div>
                    </div>
                </div> */}
