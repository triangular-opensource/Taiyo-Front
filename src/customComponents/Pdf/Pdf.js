import React from 'react'
import ReactPDF from '@intelllex/react-pdf';

const Pdf = () => {
  return (
    <div style={{height: "200px", width: "300px"}}> 
      <ReactPDF
            url="https://firebasestorage.googleapis.com/v0/b/taiyo-768b4.appspot.com/o/Advertisements%2F1100000Dec.%2010%2C%202021%2C%2011%3A52%20a.m.%2FClass%204A%20Performa%20Total.pdf?alt=media&token=a98b9c26-e501-4466-937e-d96bcf74a5e6"
            showProgressBar
            showToolbox
        />
    </div>
  )
}

export default Pdf

