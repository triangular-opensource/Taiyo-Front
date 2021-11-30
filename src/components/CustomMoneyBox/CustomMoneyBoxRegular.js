import React from 'react'
import CustomButton from '../CustomButton/CustomButton';
import CustomText from '../CustomText/CustomText';
function CustomMoneyBoxRegular() {
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
    return (
        <div style ={style}>
            <CustomText name="REGULAR" weight='bold' size= 'xxx-large'/>
            <CustomText name="Rs. 900" weight='100' size= 'x-large'/>
            <CustomText name="validity upto 90 days" weight='300' size= 'large'/>
            <CustomButton data={data}/>
        </div>
    )
}
export default CustomMoneyBoxRegular