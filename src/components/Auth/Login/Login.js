import React from 'react'
import useAuth from '../../../config/AuthContext'
import CustomButton from "../../CustomButton/CustomButton"
import CustomText from "../../CustomText/CustomText"
import CustomInput from "../../CustomInputField/CustomInput"

function Login() {

    const {login} = useAuth();
    const handleLogin = () => {
        return login("alankar.18bci1037@abes.ac.in", "1234")
    }

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
            <CustomButton data={data} handleClick = {handleLogin}   padding = '10' backgroundColor='gray' color = 'white' />
        </div>
    );
}

export default Login
