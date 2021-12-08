import {React  , useState } from 'react'
import useAuth from '../../config/AuthContext'
import CustomText from "../../customComponents/CustomText/CustomText"
import CustomInput from "../../customComponents/CustomInputField/CustomInput"
import CustomButton from "../../customComponents/CustomButton/CustomButton"
import { ReactComponent as ContactSvg } from "../../global/static/svg/contact.svg";
import CustomTextarea from '../../customComponents/CustomTextarea/CustomTextarea'
import {postContact} from '../../global/Function'

function Contact() {
    const { generalInfo , address } = useAuth();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    return (          
        <div className="container py-5 my-4">
            <div className="row">
                <div className='col-md-5 text-center my-3'>
                    <ContactSvg />
                </div>
                <div className="col-md-7 my-2">
                    <CustomText name="GET IN TOUCH" color='black' size='xx-large' weight='bold' />
                    <div className="row">
                        <div className="col-6">
                            <CustomInput type="text" placeholder='Name' value={name}   onChangeValue={(event) => setName(event.target.value)} />
                        </div>
                        <div className="col-6">
                            <CustomInput type="email" placeholder='Email' value={email}   onChangeValue={(event) => setEmail(event.target.value)}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <CustomInput type="text" placeholder='Subject' value={subject}  onChangeValue={(event) => setSubject(event.target.value)}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <CustomTextarea placeholder='Message' height='120px'  value={message}   onChangeValue={(event) => setMessage(event.target.value)}/>
                        </div>
                    </div>
                    <CustomButton fontSize="17" marginTop="20" data="Submit" handleClick=  { ()=>postContact(name , email , subject , message)}  padding='16' backgroundColor='gray' color='white' width='620' />
                </div>
            </div>
        </div>
    )
}

export default Contact










    {/* <div className="">
                <br />
                <br />
                {generalInfo.email}
                <br />
                {generalInfo.contact}
                {address.country}
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
