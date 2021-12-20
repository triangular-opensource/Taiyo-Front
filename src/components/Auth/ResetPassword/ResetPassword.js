import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import CustomAlert from "../../../customComponents/CustomAlert/CustomAlert";
import CustomButton from "../../../customComponents/CustomButton/CustomButton";
import CustomInput from "../../../customComponents/CustomInputField/CustomInput";
import CustomText from "../../../customComponents/CustomText/CustomText";
import alertMessage from "../../../global/AlertProvider";
import { EMAIL_ERROR, GLOBAL_URL } from "../../../global/Constant";
import { emailValidation } from "../../../global/validations";

const ResetPassword = () => {

	const history = useHistory();

	const sendResetPasswordEmail = async (email) => { 
		if(email !== "")
			return alertMessage(<p> Please Fill all the fields</p>);
		await axios.post(`${GLOBAL_URL}/reset-password`, {
			"email" : email 
		}).then(async () => {
			alertMessage(<p> Otp Sent to Email</p>);
			history.push("/otp", {"email": email});
		}).catch((e) =>  alertMessage(<p>Oops Some Problem Occur</p>))
	}

  const [email, setEmail] = useState("");
  return (
    <div>
      <div>
        <div class="container my-5">
          <div class="row justify-content-md-center">
            <div class="col-md-4 text-center">
              <div class="row">
                <div class="col-sm-12 bgWhite">
                  <div class="title mt-5">
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
                    onChangeValue={(event) => setEmail(event.target.value)}
                  />
                  {email !== "" && !emailValidation(email) ? (
                    <CustomAlert message={EMAIL_ERROR} />
                  ) : null}

                  <div  class = "mb-5">
                  <CustomButton
                    fontSize="17"
                    marginTop="20"
                    data="Send Otp"
                    handleClick={() => sendResetPasswordEmail(email)}
                    padding="16"
                    backgroundColor="gray"
                    color="white"
                    width="620"
                    disabled = {!(email!=="" && emailValidation(email))}
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
