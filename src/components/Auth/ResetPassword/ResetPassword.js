import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import CustomAlert from "../../Customs/CustomAlert/CustomAlert";
import CustomButton from "../../Customs/CustomButton/CustomButton";
import CustomInput from "../../Customs/CustomInputField/CustomInput";
import CustomText from "../../Customs/CustomText/CustomText";
import alertMessage from "../../../global/AlertProvider";
import { EMAIL_ERROR, GLOBAL_URL } from "../../../global/Constant";
import { emailValidation } from "../../../global/validations";

const ResetPassword = () => {
    const history = useHistory();
    const [email, setEmail] = useState("");

    const sendResetPasswordEmail = async (email) => {
        await axios
            .post(`${GLOBAL_URL}/auth/reset-password`, {
                email: email,
            })
            .then(async () => {
                alertMessage(<p> Otp Sent to Email</p>);
                history.push("/otp", { email: email });
            })
            .catch((e) => alertMessage(<p>Oops Some Problem Occur</p>));
    };

    return (
        <div>
            <div>
                <div className="container my-5">
                    <div className="row justify-content-md-center">
                        <div className="col-md-4 text-center">
                            <div className="row">
                                <div className="col-sm-12 bgWhite">
                                    <div className="title mt-5">
                                        <CustomText
                                            name="Reset Password"
                                            color="black"
                                            size="xx-large"
                                            weight="bold"
                                        />
                                    </div>
                                    <CustomInput
                                        type="email"
                                        placeholder="Enter Email"
                                        value={email}
                                        onChangeValue={(event) =>
                                            setEmail(event.target.value)
                                        }
                                    />
                                    {email !== "" && !emailValidation(email) ? (
                                        <CustomAlert message={EMAIL_ERROR} />
                                    ) : null}

                                    <div className="mb-5">
                                        <CustomButton
                                            fontSize="17"
                                            marginTop="20"
                                            data="Send Otp"
                                            handleClick={() =>
                                                sendResetPasswordEmail(email)
                                            }
                                            padding="16"
                                            backgroundColor="gray"
                                            color="white"
                                            width="620"
                                            disabled={
                                                !(
                                                    email !== "" &&
                                                    emailValidation(email)
                                                )
                                            }
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResetPassword;
