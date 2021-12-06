import React from 'react'
import './CustomInput.css'
function CustomInput(props){
    return (
    <div className="wrapper"> 
      <div className="search-input">
        <a href="https://svgcarol.com"  hidden>dsfd</a>
        <input type={props.type} value={props.value} className={props.class} style={{width:"100%"}} onChange={props.onChangeValue} placeholder={props.placeholder}/>
        {/* <div className="autocom-box">
          <!-- here list are inserted from javascript -->
        </div> */}
        <div className="icon"><i className="fas fa-search"></i></div>
      </div>
    </div>
    )
}

export default CustomInput
