import React, { useState } from "react";
import CustomText from "../../Customs/CustomText/CustomText";
import CustomButton from "../../Customs/CustomButton/CustomButton";
import OtpInput from "react-otp-input";
import CustomInput from "../../Customs/CustomInputField/CustomInput";
import { GLOBAL_URL } from "../../../global/Constant";
import axios from "axios";
import alertMessage from "../../../global/AlertProvider";
import { useHistory } from "react-router-dom";

const Otp = (props) => {
    const [otp, setOtp] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const history = useHistory();
    const handleChange = (otp) => {
        setOtp(otp);
    };

    const changePasswordByOtp = async (otp, password) => {
        await axios
            .post(
                `${GLOBAL_URL}/auth/reset-password-token/${props.location.state.email}`,
                {
                    token: otp,
                    password: password,
                }
            )
            .then(async () => {
                history.push("/reset-password-success");
            })
            .catch((error) => {
                console.log(error.response)
                alertMessage(<p>oOOps Some Problem Occr </p>);
            })
    };

    return (
        <div>
            <div className="container mb-5">
                <div className="row justify-content-md-center">
                    <div className="text-center">
                        <div className="row">
                            <div className="col-12 mt-5 bgWhite">
                                <div className="title">
                                    <CustomText
                                        name="Verify Otp"
                                        color="black"
                                        size="xx-large"
                                        weight="bold"
                                    />
                                </div>
                                <OtpInput
                                    containerStyle={{
                                        padding: "20px",
                                        color: "black",
                                    }}
                                    inputStyle={{
                                        width: "3rem",
                                        margin: "15px",
                                        padding: "7px 9px",
                                    }}
                                    value={otp}
                                    onChange={(event) => handleChange(event)}
                                    numInputs={6}
                                    separator={"-"}
                                />

                                <CustomInput
                                    type="password"
                                    value={password}
                                    placeholder="Password"
                                    onChangeValue={(event) => {
                                        setPassword(event.target.value);
                                    }}
                                />

                                <CustomInput
                                    type="password"
                                    value={confirmPassword}
                                    placeholder="Confirm Password"
                                    onChangeValue={(event) => {
                                        setConfirmPassword(event.target.value);
                                    }}
                                />

                                <CustomButton
                                    fontSize="17"
                                    marginTop="20"
                                    data="Submit"
                                    handleClick={() =>
                                        changePasswordByOtp(otp, password)
                                    }
                                    padding="16"
                                    backgroundColor="gray"
                                    color="white"
                                    width="620"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Otp;
