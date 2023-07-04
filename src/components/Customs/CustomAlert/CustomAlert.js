import React from 'react'
import './CustomAlert.css'
function CustomAlert(props) {
    return (
        <span className = "Custom__Alert"> {props.message} </span>
    )
}
export default CustomAlert
