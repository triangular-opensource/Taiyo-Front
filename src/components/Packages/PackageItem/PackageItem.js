import React from "react";
import CustomButton from "../../Customs/CustomButton/CustomButton";
import CustomText from "../../Customs/CustomText/CustomText";

const PackageItem = (props) => {
    const data = "SELECT PLAN";
    const style = {
        padding: "50px",
        color: "#f0f9ff",
        backgroundColor: "#282d32",
        width: "400px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        margin: "10px",
    };

    function handleClick() {
        props.onClick();
    }

    return (
        <div style={style}>
            <CustomText name={props.name} weight="bold" size="xxx-large" />
            <CustomText name={`Rs. ${props.amount}`} weight="100" size="x-large" />
            <CustomText
                name={`validity upto ${props.days} days`}
                weight="300"
                size="large"
            />
            <br />
            <CustomButton
                data={data}
                handleClick={handleClick}
                padding="10"
                backgroundColor="gray"
                color="white"
            />
        </div>
    );
};
export default PackageItem;
