import React from 'react'
import CustomButton from '../CustomButton/CustomButton'
import { ReactComponent as LocationSvg } from "../../global/static/svg/location.svg"
import "./CustomItemCard.css"
import { NavLink } from 'react-router-dom'

const CustomItemCard = () => {
    return (
        <div className="col-md-12 my-2">
            <div class="row p-3 no-gutters border bg-white rounded overflow-hidden flex-md-row mb-1 shadow h-md-100 position-relative">
                <div className="col-md-4 text-center">
                    <img className="rounded" style={{maxHeight: "130px"}} src="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9jdXN8ZW58MHx8MHx8&w=1000&q=80" alt="some" />
                </div>
                <div className="col-md-8 pl-4">
                    <div className="row">
                        <div className="col-6">
                            <h5>Product Name</h5>
                        </div>
                        <div className="col-6">
                            <span className="float-right">
                                <h4>&#8377; 25,688.00</h4>
                            </span>
                        </div>
                    </div>
                    <div className="row my-1">
                        <div className="col ad__desc">
                            Coated Flat Steel GP Galvanized Steel
                        </div>
                    </div>
                    <div className="row my-1">
                        <div className="col text-muted searchItem__location">
                            <LocationSvg /> 
                            <span> Mathura, Uttar Pradesh, India</span>
                        </div>
                    </div>
                    <div className="row my-1">
                        <div className="col-8 searchItem__timestamp">
                            Posted : November 25, 2021
                        </div>
                        <div className="col-4">
                            <NavLink to="/search-detail">
                                <CustomButton disabled={false} fontSize="14" marginTop="0" data="Details" handleClick={() => {}} padding='6' backgroundColor='gray' color='white' />
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CustomItemCard
