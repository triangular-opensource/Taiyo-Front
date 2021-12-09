import React, { useState } from 'react'
import useAuth from '../../../config/AuthContext'
import CustomButton from "../../../customComponents/CustomButton/CustomButton"
import CustomInput from "../../../customComponents/CustomInputField/CustomInput"
import "./Login.css"
import { ReactComponent as LoginSvg } from "../../../global/static/svg/login.svg";
import { NavLink } from 'react-router-dom'

import { emailValidation } from '../../../global/validations'
import { EMAIL_ERROR } from '../../../global/Constant'
import CustomAlert from '../../../customComponents/CustomAlert/CustomAlert'

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isEmailValidate, setEmailValidate] = useState(true);

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
                                    {console.log("sddfdsffd")
                                    setEmailValidate(false)
                                    }
                                else
                                   {
                                       console.log("fail")
                                       setEmailValidate(true)
                                   }
                            }}  placeholder='Email'  />
                        
                        {isEmailValidate &&  <CustomAlert  message = {EMAIL_ERROR}/ > }    
                        
                    </div>
                    <div className="form-row col-md-12">
                        <CustomInput type="password" value={password} onChangeValue={(event) => setPassword(event.target.value)} placeholder='Password'/>
                    </div>
                    <div className="form-row col-md-12">
                        <CustomButton disabled={!(email && password)} fontSize="17" marginTop="20" data="LOGIN" handleClick={handleLogin} padding='16' backgroundColor='gray' color='white' />
                    </div>
                    <hr />
                    <p className="mt-2 mx-4">Don't have an account? <NavLink className="text-decoration-none" to="/register">Register here</NavLink></p>
                </div>
            </div>
        </div>
    );
}

export default Login
