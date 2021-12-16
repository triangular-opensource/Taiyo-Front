import React, { useState } from "react";
import useToken from "../../config/useToken";
import CustomButton from "../CustomButton/CustomButton";
import CustomInput from "../CustomInputField/CustomInput";
import CustomText from "../CustomText/CustomText";
import defaultImage from "../../global/static/default.png";

const CustomUserEditForm = () => {
    const { userData } = useToken();
    const [loading, setLoading] = useState(false);
    const [firstName, setFirstName] = useState(userData().first_name);
    const [middleName, setMiddleName] = useState(userData().middle_name);
    const [lastName, setLastName] = useState(userData().last_name);
    const [email, setEmail] = useState(userData().email);
    const [phoneNumber, setPhoneNumber] = useState(userData().phone_number);
    const [userType, setUserType] = useState(userData().user_type);
    const [image, setImage] = useState(userData().image);
    const [companyName, setCompanyName] = useState(userData().company_name);
    const [companyAddress, setCompanyAddress] = useState(userData().company_address);
    const [companyCity, setCompanyCity] = useState(userData().company_city);
    const [companyState, setCompanyState] = useState(userData().company_state);
    const [companyCountry, setCompanyCountry] = useState(userData().company_country);
    const [companyPinCode, setCompanyPinCode] = useState(userData().company_pin_code);
    const [gst, setGst] = useState(userData().gst_number);

    return (
        <div className="card h-100">
            <div className="card-body bg-light">
                <h3>Edit Profile</h3>
                <hr />
                <div className="d-flex justify-content-center align-items-center flex-column">
                    <div>
                        <img
                            style={{ height: "100px", width: "100px" }}
                            src={image ? image : defaultImage}
                            className="user__image"
                            alt="profile"
                        />
                    </div>
                    <h6 className="mt-2 text-primary">
                        {firstName} {middleName} {lastName}
                    </h6>
                </div>

                <div className="row gutters">
                    <div className="mt-4 mb-2 col-12">
                        <CustomText
                            name="Personal Details"
                            weight="bold"
                            size="large"
                            color="black"
                        />
                    </div>
                    <div className="col-md-4">
                        <div className="form-group">
                            <CustomText
                                name="First Name"
                                weight="light"
                                size="large"
                                color="black"
                            />
                            <CustomInput
                                type="text"
                                placeholder="First Name"
                                value={firstName}
								onChangeValue={(e) => setFirstName(e.target.value)}
                                required={true}
                            />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="form-group">
                            <CustomText
                                name="Middle Name"
                                weight="light"
                                size="large"
                                color="black"
                            />
                            <CustomInput
                                type="text"
                                placeholder="Middle Name"
                                value={middleName}
								onChangeValue={(e) => setMiddleName(e.target.value)}
                                required={false}
                            />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="form-group">
                            <CustomText
                                name="Last Name"
                                weight="light"
                                size="large"
                                color="black"
                            />
                            <CustomInput
                                type="text"
                                placeholder="Last Name"
                                value={lastName}
								onChangeValue={(e) => setLastName(e.target.value)}
                                required={true}
                            />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="form-group">
                            <CustomText
                                name="Email"
                                weight="light"
                                size="large"
                                color="black"
                            />
                            <CustomInput
                                type="email"
                                placeholder="Email"
                                value={email}
								onChangeValue={(e) => setEmail(e.target.value)}
                                required={true}
                            />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="form-group">
                            <CustomText
                                name="Phone Number"
                                weight="light"
                                size="large"
                                color="black"
                            />
                            <CustomInput
                                type="text"
                                placeholder="Phone Number"
                                value={phoneNumber}
								onChangeValue={(e) => setPhoneNumber(e.target.value)}
                                required={true}
                            />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="form-group">
                            <CustomText
                                name="Type"
                                weight="light"
                                size="large"
                                color="black"
                            />
                            <CustomInput
                                type="text"
                                placeholder="User Type"
                                value={userType}
								onChangeValue={(e) => setUserType(e.target.value)}
                                required={true}
                            />
                        </div>
                    </div>
                </div>
                <div className="row gutters">
                    <div className="mb-2 mt-5 col-12">
                        <CustomText
                            name="Company Information"
                            weight="bold"
                            size="large"
                            color="black"
                        />
                    </div>
                    <div className="col-md-3">
                        <div className="form-group">
                            <CustomText
                                name="Company Name"
                                weight="light"
                                size="large"
                                color="black"
                            />
                            <CustomInput
                                type="text"
                                placeholder="Company Name"
                                value={companyName}
								onChangeValue={(e) => setCompanyName(e.target.value)}
                                required={true}
                            />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <CustomText
                                name="Address"
                                weight="light"
                                size="large"
                                color="black"
                            />
                            <CustomInput
                                type="text"
                                placeholder="Address"
                                value={companyAddress}
								onChangeValue={(e) => setCompanyAddress(e.target.value)}
                                required={true}
                            />
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="form-group">
                            <CustomText
                                name="Country"
                                weight="light"
                                size="large"
                                color="black"
                            />
                            <CustomInput
                                type="text"
                                placeholder="Country"
                                value={companyCountry}
								onChangeValue={(e) => setCompanyCountry(e.target.value)}
                                required={true}
                            />
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="form-group">
                            <CustomText
                                name="City"
                                weight="light"
                                size="large"
                                color="black"
                            />
                            <CustomInput
                                type="text"
                                placeholder="City"
                                value={companyCity}
								onChangeValue={(e) => setCompanyCity(e.target.value)}
                                required={true}
                            />
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="form-group">
                            <CustomText
                                name="State"
                                size="large"
                                color="black"
                            />
                            <CustomInput
                                type="text"
                                placeholder="State"
                                value={companyState}
								onChangeValue={(e) => setCompanyState(e.target.value)}
                                required={true}
                            />
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="form-group">
                            <CustomText
                                name="Pin Code"
                                size="large"
                                color="black"
                            />
                            <CustomInput
                                type="text"
                                placeholder="Pin Code"
                                value={companyPinCode}
								onChangeValue={(e) => setCompanyPinCode(e.target.value)}
                                required={true}
                            />
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="form-group">
                            <CustomText
                                name="GST Number"
                                size="large"
                                color="black"
                            />
                            <CustomInput
                                type="text"
                                placeholder="GST Number"
                                value={gst}
								onChangeValue={(e) => setGst(e.target.value)}
                                required={true}
                            />
                        </div>
                    </div>
                </div>
                <div className="row gutters">
                    <div className="col-12">
                        <div className="text-right">
                            <CustomButton
                                disabled={false}
                                fontSize="20"
                                marginTop="20"
                                data={
                                    !loading ? (
                                        "Update Profile"
                                    ) : (
                                        <spam>
                                            Updating
                                            <div className="ml-2 spinner-border spinner-border-sm" role="status">
                                                <span className="sr-only">
                                                    Loading...
                                                </span>
                                            </div>
                                        </spam>
                                    )
                                }
                                // handleClick={}
                                padding="16"
                                backgroundColor="gray"
                                color="white"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomUserEditForm;
