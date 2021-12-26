import React from "react";
import "./CustomButton.css";

function CustomButton(props) {
    const style = {
        display: "flex",
        justifyContent: "center",
        width: "100%",
        padding: `${props.padding}px`,
        color: props.color,
        backgroundColor: props.backgroundColor,
        border: props.backgroundColor,
        marginTop: `${props.marginTop}px`,
        fontSize: `${props.fontSize}px`,
        cursor: `${props.disabled ? "not-allowed" : "pointer"}`,
    };

    return (
        <button
            className="myButton"
            disabled={props.disabled}
            style={style}
            onClick={props.handleClick}
            data-toggle={props.dataToggle}
            data-target={props.dataTarget}
            id={props.id}
        >
            {props.data}
        </button>
    );
}

export default CustomButton;
