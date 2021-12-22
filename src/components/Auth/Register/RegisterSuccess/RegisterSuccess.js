import React from 'react'
import { useHistory } from 'react-router-dom'
import CustomButton from '../../../Customs/CustomButton/CustomButton';
import CustomText from '../../../Customs/CustomText/CustomText';

const RegisterSuccess = () => 
{
const history =  useHistory();
return (
<div>
<div> 
<div className="container">
  <div className="row justify-content-md-center">
      <div className="col-md-4 text-center">
        <div className="row">
          <div className="col-sm-12 mt-5 bgWhite">
            <div className="title">
            <CustomText name="Account Created " color='gray' size='xx-large' weight='bold' />
            </div>
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

export default RegisterSuccess
