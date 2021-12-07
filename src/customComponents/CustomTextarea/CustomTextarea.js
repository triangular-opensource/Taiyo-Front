import React from 'react'
import './CustomTextarea.css'

function CustomTextarea(props){

 	const style = {
    	width: "100%",
    	height : props.height  ? props.height : `150px`,
  	}
    
	return (
    	<div className="wrapper"> 
      		<div className="textarea">
				<textarea
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

export default CustomTextarea
