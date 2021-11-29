import React from 'react'
import CustomText from '../CustomText/CustomText';
function CustomMoneyBox() {
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
            <CustomText name="Basic" weight='bold' size= 'xxx-large'/>
            <CustomText name="Rs. 300" weight='100' size= 'x-large'/>
            <CustomText name="validity upto 30 days" weight='300' size= 'large'/>
        </div>
    )
}
export default CustomMoneyBox