import {React  , useState } from 'react'
import CustomText from "../../customComponents/CustomText/CustomText"
import CustomInput from "../../customComponents/CustomInputField/CustomInput"
import CustomButton from "../../customComponents/CustomButton/CustomButton"
import { ReactComponent as ContactSvg } from "../../global/static/svg/contact.svg";
import CustomTextarea from '../../customComponents/CustomTextarea/CustomTextarea'
import {postContact} from '../../global/Function'
import { emailValidation } from '../../global/validations'
import { EMAIL_ERROR } from '../../global/Constant'
import CustomAlert from '../../customComponents/CustomAlert/CustomAlert'

function Contact() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    return (        
        <div className="container py-5 my-4 auth-bg px-5" > 
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
                    <CustomButton  disabled = { !(email!=="" && emailValidation(email)) } fontSize="17" marginTop="20" data="Submit" handleClick=  { ()=>postContact(name , email , subject , message)}  padding='16' backgroundColor='gray' color='white' width='620' />
                </div>
            </div>
        </div>
    )
}

export default Contact
