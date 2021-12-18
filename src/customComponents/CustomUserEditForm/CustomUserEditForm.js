import React, { useRef, useState } from "react";
import useToken from "../../config/useToken";
import CustomButton from "../CustomButton/CustomButton";
import CustomInput from "../CustomInputField/CustomInput";
import CustomText from "../CustomText/CustomText";
import defaultImage from "../../global/static/default.png";
import "./CustomUserEditForm.css"
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "../../config/Firebase";
import axios from "axios";
import { GLOBAL_URL } from "../../global/Constant";
import useAuth from "../../config/AuthContext";

const CustomUserEditForm = () => {

    const scrollRef = useRef(null)

    const {getUserData} = useAuth()
    const { userData, getToken } = useToken();
 
    const [loading, setLoading] = useState(false);
    const [updated, setUpdated] = useState(false);
    const [error, setError] = useState("");
    const [firstName, setFirstName] = useState(userData().first_name);
    const [middleName, setMiddleName] = useState(userData().middle_name ? userData().middle_name : "");
    const [lastName, setLastName] = useState(userData().last_name);
    const [email, setEmail] = useState(userData().email);
    const [phoneNumber, setPhoneNumber] = useState(userData().phone_number);
    const [userType, setUserType] = useState(userData().user_type);
    const [imageUrl, setImageUrl] = useState(userData().image);
    const [companyName, setCompanyName] = useState(userData().company_name);
    const [companyAddress, setCompanyAddress] = useState(userData().company_address);
    const [companyCity, setCompanyCity] = useState(userData().company_city);
    const [companyState, setCompanyState] = useState(userData().company_state);
    const [companyCountry, setCompanyCountry] = useState(userData().company_country);
    const [companyPinCode, setCompanyPinCode] = useState(userData().company_pin_code);
    const [gst, setGst] = useState(userData().gst_number);
    const [uploadImage, setUploadImage] = useState(null);
    const [uploadImageName, setUploadImageName] = useState("");


    const imageUpload = async () => {
        const storageRef = ref(storage, `Users/ProfilePics/${email}/${uploadImageName}`)
        
        await uploadBytes(storageRef, uploadImage).then(async (snapshot) => {
            const imageRef = ref(storage, `Users/ProfilePics/${email}/${uploadImageName}`)
            await getDownloadURL(imageRef).then((url) => {
                setImageUrl(url);
            }).catch((error) => console.log(error))
        }).catch((error) => console.log(error))
    }
    
    const upload = async () => {
        setLoading(true)

        await axios.patch(`${GLOBAL_URL}/auth/user`, {
            "first_name": firstName,
            "middle_name": middleName,
            "last_name": lastName,
            "image": imageUrl,
            "gst_number": gst,
            "phone_number": phoneNumber,
            "user_type": userType,
            "company_name": companyName,
            "company_type": userData().company_type,
            "package_type": userData().package_type,
            "company_address": companyAddress,
            "company_city": companyCity,
            "company_state": companyState,
            "company_country": companyCountry,
            "company_pin_code": companyPinCode
        }, {
            headers: {
                "Authorization" : `Token ${getToken()}`,
                "Content-Type": "application/json"
            }
        }).then(async (res) => {
            if (res.status === 200) {
                getUserData(getToken());
                scrollRef.current.scrollIntoView({behavior: "smooth"})
                setUpdated(true);
                setLoading(false);
            }
        }).catch(error => console.log(error))
    }

    return (
        <div className="card h-100" ref={scrollRef}>
            <div className="card-body bg-light">
                <h3>Edit Profile</h3>
                <hr />
                <div className="d-flex align-items-center flex-column">
                    {updated ? (
                        <div className="w-100 text-center alert alert-success alert-dismissible fade show" role="alert">
                            <strong>Profile Updated Successfully</strong>
                            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        ) : ""}
                    <div>
                        <img
                            style={{ height: "100px", width: "100px" }}
                            src={userData().image ? userData().image : defaultImage}
                            className="user__image"
                            alt="profile"
                        />
                        <input accept="image/*" type="file" onChange={(e) => {setUploadImage(e.target.files[0]); setUploadImageName(e.target.files[0].name)}} id="imageUpload" style={{"display": "none"}} />
                    </div>
                    <label id="profileImageUpload" className="mt-2" htmlFor="imageUpload">
                        <i className="icon ion-edit mx-1">
                            {
                                uploadImageName ? uploadImageName : "Change Profile Picture"
                            }
                        </i>
                    </label>
                    {imageUrl}
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
                                type="readonly"
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
                                handleClick={upload}
                                disabled={false}
                                fontSize="20"
                                marginTop="20"
                                data={
                                    !loading ? (
                                        "Update Profile"
                                    ) : (
                                        <span>
                                            Updating
                                            <div className="ml-2 spinner-border spinner-border-sm" role="status">
                                                <span className="sr-only">
                                                    Loading...
                                                </span>
                                            </div>
                                        </span>
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
