  import React from 'react'
import './CustomSearchBar.css'
import { ReactComponent as GlobalSvg } from "../../global/static/svg/search.svg";
function CustomSearchBar(props){
    return (
    <div className="wrapper">
      <div className="search-input">
        <input type="text" placeholder={props.placeholder}/>
        {/* <div class="autocom-box">
          <!-- here list are inserted from javascript -->
        </div> */}
        <div className="icon"><GlobalSvg /></div>
      </div>
    </div>
    )
}

export default CustomSearchBar