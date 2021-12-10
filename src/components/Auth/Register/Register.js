import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import CustomButton from '../../../customComponents/CustomButton/CustomButton';
import CustomInput from '../../../customComponents/CustomInputField/CustomInput';
import { ReactComponent as RegisterSvg } from "../../../global/static/svg/register.svg";
import axios from "axios"
import { GLOBAL_URL } from '../../../global/Constant';
import useAuth from '../../../config/AuthContext';

function Register() {

    const {register} = useAuth();

    const [email, setEmail] = useState("")
    const [firstName, setFirstName] = useState("")
    const [middleName, setMiddleName] = useState("")
    const [lastName, setLastName] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [gst, setGst] = useState("")
    const [companyName, setCompanyName] = useState("")
    const [companyType, setCompanyType] = useState("")
    const [companyAddress, setCompanyAddress] = useState("")
    const [companyCity, setCompanyCity] = useState("")
    const [companyState, setCompanyState] = useState("")
    const [companyCountry, setCompanyCountry] = useState("")
    const [companyPincode, setCompanyPincode] = useState("")

    const checkDisabled = () => {
        return false;
    }

    const handleRegister = () => {
        return register(firstName, middleName, lastName, gst, phoneNumber, companyName, companyType, companyAddress, companyCity, companyState, companyCountry, companyPincode, email, password);
    }

    return (
        <div className="container-fluid py-5 px-4">
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
                            <CustomInput type="text" required={true} value={firstName} onChangeValue={(event) => setFirstName(event.target.value)} placeholder='First Name *'/>
                        </div>
                        <div className="form-group col-md-4">
                            <CustomInput type="text" value={middleName} onChangeValue={(event) => setMiddleName(event.target.value)} placeholder='Middle Name'/>
                        </div>
                        <div className="form-group col-md-4">
                            <CustomInput type="text" value={lastName} onChangeValue={(event) => setLastName(event.target.value)} placeholder='Last Name'/>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <CustomInput type="text" value={phoneNumber} onChangeValue={(event) => setPhoneNumber(event.target.value)} placeholder='Contact Number'/>
                        </div>
                        <div className="form-group col-md-6">
                            <CustomInput type="email" value={email} onChangeValue={(event) => setEmail(event.target.value)} placeholder='Email'/>
                        </div>
                    </div> 

                    <div className="form-row">
                        <div className="form-group col-md-6"> 
                            <CustomInput type="password" value={password} onChangeValue={(event) => setPassword(event.target.value)} placeholder='Password'/>
                        </div>
                        <div className="form-group col-md-6">
                            <CustomInput type="password" value={confirmPassword} onChangeValue={(event) => setConfirmPassword(event.target.value)} placeholder='Confirm Password'/>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <CustomInput type="text" value={companyName} onChangeValue={(event) => setCompanyName(event.target.value)} placeholder='Company Name'/>
                        </div>
                        <div className="form-group col-md-6">
                            <CustomInput type="text" value={companyType} onChangeValue={(event) => setCompanyType(event.target.value)} placeholder='Company Type'/>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-12">
                            <CustomInput type="text" value={companyAddress} onChangeValue={(event) => setCompanyAddress(event.target.value)} placeholder='Company Address'/>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-4">
                            <CustomInput type="text" value={companyCity} onChangeValue={(event) => setCompanyCity(event.target.value)} placeholder='Company City'/>
                        </div>
                        <div className="form-group col-md-4">
                            <CustomInput type="text" value={companyState} onChangeValue={(event) => setCompanyState(event.target.value)} placeholder='Company State'/>
                        </div>
                        <div className="form-group col-md-4">
                            <CustomInput type="text" value={companyCountry} onChangeValue={(event) => setCompanyCountry(event.target.value)} placeholder='Company Country'/>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <CustomInput type="text" value={companyPincode} onChangeValue={(event) => setCompanyPincode(event.target.value)} placeholder='Company Pincode'/>
                        </div>
                        <div className="form-group col-md-6">
                            <CustomInput type="text" value={gst} onChangeValue={(event) => setGst(event.target.value)} placeholder='GST Number'/>
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
                            <CustomButton disabled={false} fontSize="17" data="REGISTER" handleClick={handleRegister} padding='16' backgroundColor='gray' color='white' />
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
