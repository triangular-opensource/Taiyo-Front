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
        <div className="Contact__Container">
            <div className="Contact__Container__Left">
                    <CustomText name = "GET IN TOUCH" color = 'black' size = 'xx-large' weight = 'bold'/> 
                    
                    <div className = "Contact__Container__Row">
                        <div className ="Contact__Container__Row__Item__Left" >
                            <CustomInput type="text"  placeholder='Name' width = '360px'/> 
                        </div>
                        <div className ="Contact__Container__Row__Item__Right" >
                            <CustomInput type="email" placeholder='Email' width = '360px'/> 
                        </div>
                    </div>
                   
                    <CustomInput type="text"  placeholder='Subject' width = '730px' />
                    <CustomInput type="text"  placeholder='Message' width = '730px' height = '120px'/>
                    <CustomButton  fontSize="17" marginTop="20" data="Submit" handleClick={()=>({})} padding='16' backgroundColor='gray' color='white' width = '620' />
            </div>
            <div className = 'Contact__Container__Left'>
                <ContactSvg />
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

















{/* <html lang="en">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Document</title>
	<link rel="stylesheet" href="style.css">
</head>
<body> */}



