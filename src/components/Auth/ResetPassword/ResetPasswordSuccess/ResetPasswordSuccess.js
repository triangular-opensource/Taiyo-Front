import React from 'react'
import { useHistory } from 'react-router-dom'
import CustomButton from '../../../../customComponents/CustomButton/CustomButton';
import CustomText from '../../../../customComponents/CustomText/CustomText';

const ResetPasswordSuccess = () => 
{
const history =  useHistory();
return (
<div>
<div> 
<div class="container">
  <div class="row justify-content-md-center">
      <div class="col-md-4 text-center">
        <div class="row">
          <div class="col-sm-12 mt-5 bgWhite">
            <div class="title">
            <CustomText name="Password Changed SuccessFully" color='black' size='xx-large' weight='bold' />
            </div>
            <br/>
            <br/>
            <CustomButton fontSize="17" marginTop="20" data="Back to Login Page" handleClick=  { ()=>history.push('/login')}   padding='16' backgroundColor='gray' color='white' width='620' />
            <br/>
            <br/>
          </div>
        </div>
      </div>
  </div>
</div>
</div>
</div>
)
}

export default ResetPasswordSuccess
