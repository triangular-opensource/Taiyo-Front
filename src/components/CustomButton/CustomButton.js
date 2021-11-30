import React from 'react'
import './CustomButton.css'
function handleClick() {
    alert('Click happened');
}
function CustomButton(props){
    
    return (
        <a href="#" class="myButton" onClick={() => handleClick()}>{props.data}</a>
    )
}

export default CustomButton