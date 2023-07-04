import React from 'react'
import ReactPDF from '@intelllex/react-pdf';

const Pdf = (props) => {

  return (
    <div style={{height: "100%", width: "100%", "position": "absolute", "top": "0px", "left": "0px"}}> 
      <ReactPDF
            url={props.location.hash.slice(1)}
            showProgressBar
            showToolbox
        />
    </div>
  )
}

export default Pdf