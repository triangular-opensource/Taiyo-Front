import React from 'react'
import './CustomInput.css'

function CustomInput(props){
 	const style = {
    	width: "100%",
    	height : props.height  ? props.height : `55px` 
  	}
	return (
    	<div className="wrapper"> 
      		<div className="input">
				<input
				type={props.type}
				value={props.value}
				className={props.class}
				style={style}
				onChange={props.onChangeValue}
				placeholder={props.placeholder}
				/>
      		</div>
    	</div>
    )
}

export default CustomInput
