import React from 'react'
import CustomButton from '../CustomButton/CustomButton'
import { ReactComponent as LocationSvg } from "../../global/static/svg/location.svg"
import "./CustomItemCard.css"
import { NavLink } from 'react-router-dom'

const CustomItemCard = (props) => {
    console.log(props)
    return (
        <div className="col-12 mb-2">
            <div className="row p-3 no-gutters border bg-white rounded overflow-hidden flex-row  h-100 position-relative   shadow-sm">
                <div className="col-3 text-center">
                    <img className="rounded" style={{maxHeight: "120px"}} src="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9jdXN8ZW58MHx8MHx8&w=1000&q=80" alt="some" />
                </div>
                {/* <div className="col-1">
                </div> */}
                <div className="col-9 pl-3">
                    <div className="row">
                        <div className="col-6">
                            <h5>Product Name </h5>
                        </div>
                        <div className="col-6">
                            <span className="float-right">
                                <h5>&#8377;  {props.data.basic_price} </h5>
                            </span>
                        </div>
                    </div>
                    <div className="row ">
                        <div className="col ad__desc">
                            {props.data.product_description}
                        </div>
                    </div>
                    <div className="row my-1">
                        <div className="col text-muted searchItem__location">
                            <LocationSvg /> 
                            <span> {props.data.author_business_address}  </span>
                            <span> {props.data.author_country} </span>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-8 searchItem__timestamp">
                            Posted : {Date(props.data.timestamp.slice(0 , 10)).slice(0 ,16)}  
                        </div>
                        <div className="col-4">
                            <NavLink to="/search-detail">
                                <CustomButton disabled={false} fontSize="16"  data="Details" handleClick={() => {}} padding='7' backgroundColor='black' color='white' />
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CustomItemCard
