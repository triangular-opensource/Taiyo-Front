import React, { forwardRef } from 'react'
import CustomText from '../../Customs/CustomText/CustomText'

const SelectBid = forwardRef(({bid, selectBid}, ref) => {

    return (
        <div ref={ref} className="row d-flex align-items-center mt-1 mb-1">
            <div className="col-6">
                <CustomText name={`Rs.${bid.amount}`} />
            </div>
            <div className="col-3 d-flex justify-content-end">
                <CustomText name={`#${bid.user}`} />
            </div>
            <div className="col-3">
                <div className="custom-control custom-switch">
                    <input type="radio" value={bid.id} onChange={(e) => selectBid(bid.id)} name="bidSelect" className="custom-control-input" id={`bidSelect_${bid.id}`} />
                    <label className="custom-control-label" htmlFor={`bidSelect_${bid.id}`}></label>
                </div>
            </div>
        </div>
    )
})

export default SelectBid
