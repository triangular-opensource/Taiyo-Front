import React from 'react'
import './CustomInput.css'
function CustomInput(props){
    return (
    <div class="wrapper">
      <div class="search-input">
        <a href="" target="_blank" hidden></a>
        <input type="text" placeholder={props.placeholder}/>
        {/* <div class="autocom-box">
          <!-- here list are inserted from javascript -->
        </div> */}
        <div class="icon"><i class="fas fa-search"></i></div>
      </div>
    </div>
    )
}

export default CustomInput
