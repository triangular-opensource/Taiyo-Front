import React, { useState } from 'react'
import CustomAlert from '../../../customComponents/CustomAlert/CustomAlert';
import CustomButton from '../../../customComponents/CustomButton/CustomButton';
import CustomInput from '../../../customComponents/CustomInputField/CustomInput';
import CustomText from '../../../customComponents/CustomText/CustomText';
import { EMAIL_ERROR } from '../../../global/Constant';
import { emailValidation } from '../../../global/validations';

const Email = () => 
{
const [email, setEmail] = useState("");
return (
<div>
<div> 
<div class="container my-5">
  <div class="row justify-content-md-center">
      <div class="col-md-4 text-center">
        <div class="row">
          <div class="col-sm-12 bgWhite">
            <div class="title mb-5">
            <CustomText name="Reset Password" color='black' size='xx-large' weight='bold' />
            </div>
            <CustomInput type="email" placeholder='Enter Email' value={email}   onChangeValue={(event) => setEmail(event.target.value)}/>
                            {(email!=="" && !emailValidation(email) ) ?  <CustomAlert  message = {EMAIL_ERROR}/ > : null }     
            <CustomButton fontSize="17" marginTop="20" data="Send Otp" handleClick=  { ()=>alert('sdds mail')}   padding='16' backgroundColor='gray' color='white' width='620' />
          </div>
        </div>
      </div>
  </div>
</div>
</div>
</div>
)
}

export default Email