import React from 'react'
import './CustomInput.css'

function CustomInput(props){
 	const style = {
    	width: "100%",
    	height : props.height  ? props.height : `40px`,
		padding : props.padding ? props.padding : '0 20px 0 20px',
		background: props.type === "readonly" ? "rgb(221 221 221)" :"white",
		cursor:  props.type === "readonly" ? "not-allowed" :"auto"
  	}

	const wrapperstyle = {
		margin: props.margin  ?  props.margin : `10px 0px 10px 0px`
	}
	return (
    	<div className="wrapper" style={ wrapperstyle}>
      		<div className="input">
				<input
				type={props.type}
				value={props.value}
				className={props.class}
				style={style}
				onChange={props.onChangeValue}
				placeholder={props.placeholder}
				required={props.required}
				onInput={props.onInput}
				onFocus={props.onFocus}
				onBlur={props.onBlur}
				disabled={props.disabled}
				maxLength={props.maxLength}
				/>
      		</div>
    	</div>
    )
}

export default CustomInput
