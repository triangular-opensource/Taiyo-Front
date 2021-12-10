import React, { useState } from 'react'
import useAuth from '../../../config/AuthContext'
import CustomButton from "../../../customComponents/CustomButton/CustomButton"
import CustomInput from "../../../customComponents/CustomInputField/CustomInput"
import "./Login.css"
import { ReactComponent as LoginSvg } from "../../../global/static/svg/login.svg";
import { NavLink } from 'react-router-dom'

import { emailValidation , passwordValidate, PasswordValidate } from '../../../global/validations'
import { EMAIL_ERROR , PASSWORD_ERROR } from '../../../global/Constant'
import CustomAlert from '../../../customComponents/CustomAlert/CustomAlert'

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isEmailValidate, setEmailValidate] = useState(false);
    const [isPasswordValidate, setPasswordValidate] = useState(false);


    const {login} = useAuth();
    const handleLogin = () => {
        return login(email, password)
    }

    return (
        <div className="container py-5">
            <div className="row no-gutters auth-bg">
                <div className="col-md-7">
                    <LoginSvg />    
                </div>
                <div className="col-md-5 px-3 pt-3">
                    <div className="col-md-12 my-4">
                        <legend>
                            <h3 className="text-center">Sign into your account</h3>
                        </legend>
                    </div>
                    <div className="form-row col-md-12">
                        <CustomInput type="email" value={email}
                         onChangeValue = {(event) => { 
                                setEmail(event.target.value)
                                if(emailValidation(event.target.value))
                                    setEmailValidate(true)
                                else
                                    setEmailValidate(false)
                            }}  placeholder='Email'  />
                        {!isEmailValidate &&  <CustomAlert  message = {EMAIL_ERROR}/ > }      
                    </div>
                    <div className="form-row col-md-12">
                        <CustomInput type="password" value={password} placeholder='Password'   onChangeValue = {(event) => { 
                                setPassword(event.target.value)
                                if(passwordValidate(event.target.value))
                                     setPasswordValidate(true)
                                else
                                    setPasswordValidate(false)  
                            }} />
                           { !isPasswordValidate &&  <PASSWORD_ERROR/> }        
                    </div>
                    <div className="form-row col-md-12">
                        <CustomButton disabled={(isEmailValidate && isPasswordValidate)} fontSize="17" marginTop="20" data="LOGIN" handleClick={handleLogin} padding='16' backgroundColor='gray' color='white' />
                    </div>
                    <hr />
                    <p className="mt-2 mx-4">Don't have an account? <NavLink className="text-decoration-none" to="/register">Register here</NavLink></p>
                </div>
            </div>
        </div>
    );
}

export default Login
