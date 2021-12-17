import React, { useState } from 'react'
import CustomText from "../../../customComponents/CustomText/CustomText"
import CustomButton from "../../../customComponents/CustomButton/CustomButton"
import OtpInput from 'react-otp-input'
const Otp = () => 
{
    const [otp, setOtp] = useState("");
    const handleChange = (otp) => {
        setOtp(otp)
    }

    return(
    	<div> 
		<div class="container">
		<div class="row justify-content-md-center">
			<div class="text-center">
				<div class="row">
				<div class="col-12 mt-5 bgWhite">
					<div class="title">
					<CustomText name="Verify Otp" color='black' size='xx-large' weight='bold' />
					</div>
					<OtpInput
						containerStyle={{"padding": "20px", "color" :"black"}}
						inputStyle={{"margin": "15px", "padding": "7px"}}
						value={otp}
						onChange={(event) => handleChange(event)}
						numInputs={6}
						separator={"-"}
					/>
					<CustomButton fontSize="17" marginTop="20" data="Submit" handleClick={()=>alert("DF")}   padding='16' backgroundColor='gray' color='white' width='620' />
				</div>
				</div>
			</div>
		</div>
		</div>
	</div>
    )
}

export default Otp
