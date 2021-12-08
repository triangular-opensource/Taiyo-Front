import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import CustomButton from '../../../customComponents/CustomButton/CustomButton';
import CustomInput from '../../../customComponents/CustomInputField/CustomInput';
import { ReactComponent as RegisterSvg } from "../../../global/static/svg/register.svg";

function Register() {

    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [contact, setContact] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const checkDisabled = () => {
        return true;
    }

    const handleRegister = () => {

    }

    // const style = {
    //     padding:"50px",
    //     color:'#f0f9ff',
    //     backgroundColor:'#282d32',
    //     width : "400px",
    //     display: "flex",
    //     alignItems: "center",
    //     justifyContent: "center",
    //     flexDirection: "column",
    //     margin: "10px"
    // }


    return (
        <div className="container py-5">
			<div className="row no-gutters auth-bg">
				<div className="col-md-7">
                    <RegisterSvg />
                </div>
				<div className="col-md-5 px-3 pt-3">
                    <div className="col-md-12 my-4">
                        <legend>
                            <h3 className="text-center">Sign up for amazing stuff</h3>
                        </legend>
                    </div>
                    <div className="form-row col-md-12">
                    <CustomInput type="text" value={name} onChangeValue={(event) => setName(event.target.value)} placeholder='Full Name'/>
                    </div>

                    <div className="form-row col-md-12">
                    <CustomInput type="text" value={contact} onChangeValue={(event) => setContact(event.target.value)} placeholder='Contact Number'/>
                    </div>

                    <div className="form-row col-md-12">
                    <CustomInput type="email" value={email} onChangeValue={(event) => setEmail(event.target.value)} placeholder='Email'/>
                    </div>

                    <div className="form-row col-md-12">
                    <CustomInput type="password" value={password} onChangeValue={(event) => setPassword(event.target.value)} placeholder='Password'/>
                    </div>

                    <div className="form-row col-md-12">
                    <CustomInput type="password" value={confirmPassword} onChangeValue={(event) => setConfirmPassword(event.target.value)} placeholder='Confirm Password'/>
                    </div>

                    <div className="form-row col-md-12">
                        <div className="custom-control custom-checkbox my-2">
                            <input type="checkbox" className="custom-control-input" id="customControlValidation1" required />
                            <label className="custom-control-label" htmlFor="customControlValidation1">I agree to Terms and Conditions</label>
                        </div>
                    </div>

                    <div className="form-row col-md-12">
                    <CustomButton disabled={checkDisabled} fontSize="17" marginTop="20" data="REGISTER" handleClick={handleRegister} padding='16' backgroundColor='gray' color='white' />
                    </div>
                    <hr/>
                    
                    <p className="mt-2 mx-4">Already have an account? <NavLink className="text-decoration-none" to="/login">Login.</NavLink></p>
				</div>
			</div>
		</div>



    )
}

export default Register
