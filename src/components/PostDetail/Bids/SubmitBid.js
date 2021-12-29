import React, { forwardRef } from 'react'
import CustomText from '../../Customs/CustomText/CustomText'

const SubmitBid = forwardRef(({bid}, ref) => {
    return (
        <div ref={ref} key={bid.id} className="row mt-1 mb-1">
            <div className="col-7">
                <CustomText name={`Rs.${bid.amount}`} />
            </div>
            <div className="col-5 d-flex justify-content-end">
                <CustomText name={`#${bid.user}`} />
            </div>
        </div>
    )
})

export default SubmitBid
