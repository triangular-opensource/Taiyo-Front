import React from 'react'
import './CustomButton.css'

function CustomButton(props)
{ 
        const style = {
            padding:"10px",
            color: props.color,
            backgroundColor: props.backgroundColor,
    }

    return (
        <div class="myButton"  style = {style} onClick = {props.handleClick}>{props.data}</div>
    )
}

export default CustomButton