import React from 'react'
import CustomButton from '../CustomButton/CustomButton';
import CustomText from '../CustomText/CustomText';


function CustomMoneyBox(props) {
    const data="SELECT PLAN"
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
            <CustomText name={props.name} weight='bold' size= 'xxx-large'/>
            <CustomText name="Rs. 300" weight='100' size= 'x-large'/>
            <CustomText name="validity upto 30 days" weight='300' size= 'large'/>
            <br/>
            <CustomButton data={data} handleClick = {handleClick}   padding = '10' backgroundColor='gray' color = 'white' />
        </div>
    )
}
export default CustomMoneyBox