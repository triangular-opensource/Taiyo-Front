import {React  , useState } from 'react'
import CustomText from "../Customs/CustomText/CustomText"
import CustomInput from "../Customs/CustomInputField/CustomInput"
import CustomButton from "../Customs/CustomButton/CustomButton"
import { ReactComponent as ContactSvg } from "../../global/static/svg/contact.svg";
import CustomTextarea from '../Customs/CustomTextarea/CustomTextarea'

import { emailValidation } from '../../global/validations'
import { EMAIL_ERROR, GLOBAL_URL } from '../../global/Constant'
import CustomAlert from '../Customs/CustomAlert/CustomAlert'
import alertMessage from '../../global/AlertProvider';
import axios from 'axios';

function Contact() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);



    async function postContact(name, email, subject , message ) 
    {   
        setLoading(true)

        if(name === "" || subject === "" || message === "")
            return  alertMessage(<p> Please Fill all the fields</p>);    
        await axios.post(`${GLOBAL_URL}/contact`, {
                "name" :  name ,
                "email" : email ,
                "subject" : subject ,
                "message" : message
            }).then(async (response) => {
                alertMessage(<p> Thankyou for Contacting Us , We Will Get Back To You</p>);
        }).catch(async (error) =>  alertMessage(<p> OOps Some Problem Occur </p>) )
       
        setEmail("")
        setSubject("")
        setMessage("")
        setLoading(false)
    }
    

    return (        
        <div className="container py-5 my-5 auth-bg px-5" > 
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
                            {(email!=="" && !emailValidation(email) ) ?  <CustomAlert  message = {EMAIL_ERROR}/ > : null }     
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
                    <CustomButton  disabled = { !(email!=="" && emailValidation(email)) } fontSize="17" marginTop="20" data=
                    {
                        loading
                        ?
                            <span>
                                Submit
                                <div className="ml-2 spinner-border spinner-border-sm" role="status">
                                    <span className="sr-only">Loading...</span>
                                </div>
                            </span>
                        : 
                            "Submit"
                    }
                    
                    
                    handleClick=  { ()=>postContact(name , email , subject , message)}  padding='16' backgroundColor='gray' color='white' width='620' />
                </div>
            </div>
        </div>
    )
}

export default Contact
