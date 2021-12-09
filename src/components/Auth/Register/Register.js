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


    return (
        <div className="container-fluid py-5">
			<div className="row no-gutters auth-bg">
				<div className="col-md-6">
                    <RegisterSvg />
                </div>
				<div className="col-md-6 px-3 pt-3">
                    <div className="col-md-12 my-4">
                        <legend>
                            <h3 className="text-center">Sign up for amazing stuff</h3>
                        </legend>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-4">
                            <CustomInput type="text" value={name} onChangeValue={(event) => setName(event.target.value)} placeholder='First Name'/>
                        </div>
                        <div className="form-group col-md-4">
                            <CustomInput type="text" value={name} onChangeValue={(event) => setName(event.target.value)} placeholder='Middle Name'/>
                        </div>
                        <div className="form-group col-md-4">
                            <CustomInput type="text" value={name} onChangeValue={(event) => setName(event.target.value)} placeholder='Last Name'/>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <CustomInput type="text" value={contact} onChangeValue={(event) => setContact(event.target.value)} placeholder='Contact Number'/>
                        </div>
                        <div className="form-group col-md-6">
                            <CustomInput type="email" value={contact} onChangeValue={(event) => setContact(event.target.value)} placeholder='Email'/>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <CustomInput type="password" value={contact} onChangeValue={(event) => setContact(event.target.value)} placeholder='Password'/>
                        </div>
                        <div className="form-group col-md-6">
                            <CustomInput type="password" value={contact} onChangeValue={(event) => setContact(event.target.value)} placeholder='Confirm Password'/>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <CustomInput type="text" value={contact} onChangeValue={(event) => setContact(event.target.value)} placeholder='Company Name'/>
                        </div>
                        <div className="form-group col-md-6">
                            <CustomInput type="text" value={contact} onChangeValue={(event) => setContact(event.target.value)} placeholder='Company Type'/>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-12">
                            <CustomInput type="text" value={contact} onChangeValue={(event) => setContact(event.target.value)} placeholder='Company Address'/>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-4">
                            <CustomInput type="text" value={contact} onChangeValue={(event) => setContact(event.target.value)} placeholder='Company City'/>
                        </div>
                        <div className="form-group col-md-4">
                            <CustomInput type="text" value={contact} onChangeValue={(event) => setContact(event.target.value)} placeholder='Company State'/>
                        </div>
                        <div className="form-group col-md-4">
                            <CustomInput type="text" value={contact} onChangeValue={(event) => setContact(event.target.value)} placeholder='Company Country'/>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <CustomInput type="text" value={contact} onChangeValue={(event) => setContact(event.target.value)} placeholder='Company Pincode'/>
                        </div>
                        <div className="form-group col-md-6">
                            <CustomInput type="text" value={contact} onChangeValue={(event) => setContact(event.target.value)} placeholder='GST Number'/>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-12">
                            <div className="custom-control custom-checkbox my-2">
                                <input type="checkbox" className="custom-control-input" id="customControlValidation1" required />
                                <label className="custom-control-label" htmlFor="customControlValidation1">I agree to Terms and Conditions</label>
                            </div>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-12">
                            <CustomButton disabled={checkDisabled} fontSize="17" data="REGISTER" handleClick={handleRegister} padding='16' backgroundColor='gray' color='white' />
                        </div>
                    </div>
                    <hr/>
                    
                    <p className="mt-2">Already have an account? <NavLink className="text-decoration-none" to="/login">Login.</NavLink></p>
				</div>
			</div>
		</div>



    )
}

export default Register
