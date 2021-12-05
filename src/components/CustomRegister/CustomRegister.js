import React from 'react'
import CustomButton from '../CustomButton/CustomButton';
import CustomInput from '../CustomInputField/CustomInput';
import CustomText from '../CustomText/CustomText';

function CustomRegister() 
{
    const data="REGISTER"
    const style = {
        padding:"50px",
        color:'#f0f9ff',
        backgroundColor:'#282d32',
        width : "400px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        margin: "10px"
}

function handleClick() {
    alert('Click happened');
}


    return (
        <div style ={style}>
           <CustomText name="Registeration" weight='bold' size= 'xx-large'/>
            <CustomInput placeholder='Email'/>    
            <CustomInput placeholder='Password'/>
            <CustomInput placeholder='name'/>
            <CustomInput placeholder='Address'/>
            <CustomInput placeholder='Phone Number'/>
            <CustomButton data={data} handleClick = {handleClick}   padding = '10' backgroundColor='gray' color = 'white' />
        </div>
    )
}

export default CustomRegister
