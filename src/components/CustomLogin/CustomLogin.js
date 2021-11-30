import React from 'react'
import CustomButton from '../CustomButton/CustomButton';
import CustomInput from '../CustomInputField/CustomInput';
import CustomText from '../CustomText/CustomText';

function CustomLogin() {  
    const data = "LOGIN";  
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

    return (
        
        <div style ={style}>
            <CustomText name="Login" weight='bold' size= 'xx-large'/>
            <CustomInput placeholder='Email'/>    
            <CustomInput placeholder='Password'/>
            <CustomButton data={data}/>
        </div>
    );
}

export default CustomLogin
