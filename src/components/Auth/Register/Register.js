import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import CustomButton from '../../Customs/CustomButton/CustomButton';
import CustomInput from '../../Customs/CustomInputField/CustomInput';
import { ReactComponent as RegisterSvg } from "../../../global/static/svg/register.svg";
import useAuth from '../../../config/AuthContext';
import { emailValidation, gstValidation, passwordValidate, phoneValidation, pincodeValidate } from '../../../global/validations';
import alertMessage from '../../../global/AlertProvider';
import Popup from '../../Customs/Popup/Popup';
import TermAndConditions from '../../Policiy/TermsAndConditions/TermAndConditions';

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
    const [showConfirmPassAlert, setShowConfirmPassAlert] = useState(false)
    const [check, setCheck] = useState(false)

    const [checked, setChecked] = useState(true);

    const handleRegister = () => {

        if(firstName ==="" 
            || lastName ===""
            || companyName===""
            || companyType===""
            || companyState===""
            || companyCity==="" 
            || companyCountry==="" 
            ||companyPincode==="" 
            ||companyPincode==="" 
            ||email==="" 
            || phoneNumber==="" 
            || password==="" 
            || confirmPassword==="" 
            || gst==="" 
            ||companyType===""  )
            {
                alertMessage("please Fill All the Mandatory Field");
                return; 
            }     
        if(!phoneValidation(phoneNumber)) 
            {
                alertMessage("please Fill valid Phone Number");
                return;
            }
        if(!emailValidation(email)) 
            {
                alertMessage("please Fill valid email");
                return;
            }
        if(!passwordValidate(password)) 
        {
                alertMessage("Password should not contain any space.\n Password should contain at least one digit(0-9). \n Password length should be between 8 to 15 characters. \n Password should contain at least one lowercase letter(a-z). \n Password should contain at least one uppercase letter(A-Z). \n Password should contain at least one special character ( @, #, %, &, !, $, etc….)." );
                return;
        } 
        if(password !== confirmPassword) 
            {
                alertMessage("password and confirm password should be same");
                return;
            } 
        if(!pincodeValidate(companyPincode)) 
            {
                alertMessage("please enter valid pincode");
                return;
            }    
        if(!gstValidation(gst)) 
            {
                alertMessage("please Fill valid gst Number");
                return;
            }
        if(check===false) 
            {
                alertMessage("please allow terms and conditions");
                return;
            }

        return register(firstName, middleName, lastName, gst, phoneNumber, companyName, companyType, companyAddress, companyCity, companyState, companyCountry, companyPincode, email, password);
    }
    return (
        <div className="container-fluid py-5 px-4">
			<div className="row no-gutters auth-bg">
				<div className="col-md-6 py-5">
                    <RegisterSvg style={{ width: '100%', height: 'auto' }} />
                </div>
				<div className="col-md-6 px-5 pt-3">
                    <div className="col-md-12 my-4">
                        <legend>
                            <h3 className="text-center">Sign up for amazing stuff</h3>
                        </legend>
                    </div>
                    <div className="form-row">
                        <div className="col-md-4">
                            <CustomInput type="text" required={true} value={firstName} onChangeValue={(event) => setFirstName(event.target.value)} placeholder='First Name *' />
                        </div>
                        <div className="col-md-4">
                            <CustomInput type="text" value={middleName} onChangeValue={(event) => setMiddleName(event.target.value)} placeholder='Middle Name'/>
                        </div>
                        <div className="col-md-4">
                            <CustomInput type="text" value={lastName} onChangeValue={(event) => setLastName(event.target.value)} placeholder='Last Name *'/>
                        
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="col-md-6">
                            <CustomInput type="text" value={phoneNumber} onChangeValue={(event) => setPhoneNumber(event.target.value)} placeholder='Contact Number *'/>
                            {/* {(phoneNumber!=="" && !phoneValidation(phoneNumber) ) ?  <CustomAlert  message = {"please enter correct phone Number"}/ > : null }  */}
                        </div>
                        <div className="col-md-6">
                            <CustomInput type="email" value={email} onChangeValue={(event) => setEmail(event.target.value)} placeholder='Email *'     />
                            {/* {(email!=="" && !emailValidation(email) ) ?  <CustomAlert  message = {EMAIL_ERROR}/ > : null }  */}
                        </div>
                    </div> 
                    <div className="form-row">
                        <div className="col-md-6"> 
                            <CustomInput type="password" value={password} onChangeValue={(event) => setPassword(event.target.value)} placeholder='Password *'/>
                            {/* {(password !== "" && !passwordValidate(password)) ?  <PASSWORD_ERROR/> : null }   */}
                        </div>
                        <div className="col-md-6">
                            <CustomInput type="password" onBlur={() => setShowConfirmPassAlert(false)} onFocus={() => setShowConfirmPassAlert(true)} value={confirmPassword} onChangeValue={(event) => setConfirmPassword(event.target.value)} placeholder='Confirm Password *'/>
                            {/* {(showConfirmPassAlert && confirmPassword !== password) ?  <CustomAlert message = {"confirm password and change password should be same "}/> : null }  */}
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="col-md-6">
                            <CustomInput type="text" value={companyName} onChangeValue={(event) => setCompanyName(event.target.value)} placeholder='Company Name *'/>
                        </div>
                        <div className="col-md-6">
                            <CustomInput type="text" value={companyType} onChangeValue={(event) => setCompanyType(event.target.value)} placeholder='Company Type *'/>
                        
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="col-md-12">
                            <CustomInput type="text" value={companyAddress} onChangeValue={(event) => setCompanyAddress(event.target.value)} placeholder='Company Address *'/>
                        
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="col-md-4">
                            <CustomInput type="text" value={companyCity} onChangeValue={(event) => setCompanyCity(event.target.value)} placeholder='Company City *'/>
                        
                        </div>
                        <div className="col-md-4">
                            <CustomInput type="text" value={companyState} onChangeValue={(event) => setCompanyState(event.target.value)} placeholder='Company State *'/>
                            
                        </div>
                        <div className="col-md-4">
                            <CustomInput type="text" value={companyCountry} onChangeValue={(event) => setCompanyCountry(event.target.value)} placeholder='Company Country *'/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="col-md-6">
                            <CustomInput type="text" value={companyPincode} onChangeValue={(event) => setCompanyPincode(event.target.value)} placeholder='Company Pincode *'/>
                            {/* {(companyPincode!=="" && !pincodeValidate(companyPincode)) ?  <CustomAlert  message = {"pincode is six digit numeric"}/ > : null }  */}
                        </div>
                        <div className="col-md-6">
                            <CustomInput type="text" value={gst} onChangeValue={(event) => setGst(event.target.value)} placeholder='GST Number *'/>
                            {/* {(gst!=="" && !gstValidation(gst)) ?  <CustomAlert  message = {"type vali GstNumber"}/ > : null }  */}
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="col-md-12">
                            <div className="custom-control custom-checkbox my-2">
                                <input type="checkbox" className="custom-control-input" id="customControlValidation1"  defaultChecked={check} onChange={() => setCheck(!check)} />
                                <label className="custom-control-label" htmlFor="customControlValidation1">I agree to </label>
                                <span className='ml-2 text-primary' style={{"fontWeight": "bold", "cursor": "pointer"}} data-target="#exampleModal" data-toggle="modal">
                                    Terms And Condition
                                </span>
                            </div>
                        </div>
                    </div>
                    <Popup 
                        content={
                            <>
                                <TermAndConditions />
                            </>
                        }
                    />
                    <div className="form-row">
                        <div className="col-md-12">
                            <CustomButton  fontSize="17" data="REGISTER" handleClick={handleRegister} padding='16' backgroundColor='gray' color='white' />
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
