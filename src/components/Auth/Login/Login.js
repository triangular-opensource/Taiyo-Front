import React, { useEffect, useState } from 'react'
import useAuth from '../../../config/AuthContext'
import CustomButton from "../../../customComponents/CustomButton/CustomButton"
import CustomInput from "../../../customComponents/CustomInputField/CustomInput"
import "./Login.css"
import { ReactComponent as LoginSvg } from "../../../global/static/svg/login.svg";
import { NavLink } from 'react-router-dom'

import { emailValidation , isDataNull, passwordValidate, PasswordValidate } from '../../../global/validations'
import { EMAIL_ERROR , PASSWORD_ERROR } from '../../../global/Constant'
import CustomAlert from '../../../customComponents/CustomAlert/CustomAlert'

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading , setLoading] = useState(false);

    const {login, loginError} = useAuth();
    const handleLogin = () => {
        setLoading(true);
        return login(email, password)
    }

    useEffect(() => {
        if (loginError) {
            setLoading(false)
        }
    }, [loginError])

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
                    {
                        loginError ? (
                            <div className="col-md-12">
                                <div className="w-100 text-center alert alert-danger alert-dismissible fade show" role="alert">
                                    <strong>Invalid Email or Password!</strong>
                                    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                            </div>
                        ) : ""
                    }
                    <div className="form-row col-md-12">
                        <CustomInput type="email" value={email}
                         onChangeValue = {(event) => setEmail(event.target.value)} placeholder='Email'  />
                        {(email!=="" && !emailValidation(email) ) ?  <CustomAlert  message = {EMAIL_ERROR}/ > : null }      
                    </div>
                    <div className="form-row col-md-12">
                        <CustomInput
                            type="password"
                            value={password}
                            placeholder='Password'
                            onChangeValue = {(event) => { 
                                setPassword(event.target.value)
                            }} />
                           {(password!=="" && !passwordValidate(password)) ?  <PASSWORD_ERROR/> : null }        
                    </div>
                    <p className="mt-2 mx-4"><NavLink className="text-decoration-none" to="/reset-password">Forgot Password</NavLink></p>
                    <div className="form-row col-md-12">
                        <CustomButton
                            disabled={ !((email !== "" && emailValidation(email)) && (password !== "" && passwordValidate(password)))}
                            fontSize="17"
                            marginTop="20"
                            data={
                                loading
                                ?
                                    <span>
                                        Loading
                                        <div className="ml-2 spinner-border spinner-border-sm" role="status">
                                            <span className="sr-only">Loading...</span>
                                        </div>
                                    </span>
                                : 
                                    "LOGIN"
                            }
                            handleClick={handleLogin}
                            padding='16'
                            backgroundColor='gray'
                            color='white'
                        />
                    </div>
                    <hr />
                    <p className="mt-2 mx-4">Don't have an account? <NavLink className="text-decoration-none" to="/register">Register here</NavLink></p>
                </div>
            </div>
        </div>
    );
}

export default Login
 

