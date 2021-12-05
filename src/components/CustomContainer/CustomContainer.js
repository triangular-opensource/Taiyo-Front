import React from 'react'
import CustomInput from '../CustomInputField/CustomInput';
import CustomText from '../CustomText/CustomText';
import './CustomContainer.css';
function CustomContainer() {
    return (
        <div className = 'custom-container'>

            <CustomText name="Login"/>
            <CustomInput placeholder='Email'/>
            
            <CustomInput placeholder='Password'/>
            


        </div>
    )
}

export default CustomContainer
