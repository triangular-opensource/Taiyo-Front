import React from 'react'
import './CustomTextarea.css'

function CustomTextarea(props){

 	const style = {
    	width: "100%",
    	height : props.height  ? props.height : `150px`,
  	}
    
	return (
    	<div className="wrapper"> 
				<textarea className="textarea"
				value={props.value}
				style={style}
				onChange={props.onChangeValue}
				placeholder={props.placeholder}
				/>
      	</div>
    )
}

export default CustomTextarea
