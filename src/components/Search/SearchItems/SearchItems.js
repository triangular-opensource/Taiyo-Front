import React from 'react'
import "./SearchItems.css"
import { ReactComponent as LocationSvg } from "../../../global/static/svg/location.svg"

const SearchItems = () => {
    return (
        <div className="col-md-12 my-2">
            <div class="row p-3 no-gutters border bg-white rounded overflow-hidden flex-md-row mb-1 shadow h-md-100 position-relative">
                <div className="col-md-4">
                    <img className="img-fluid rounded" src="" alt="some" />
                </div>
                <div className="col-md-8">
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
                        <div className="col">
                            <span className="d-block text-truncate">
                                Praeterea iter est quasdam res quas ex communi. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae, accusamus molestiae temporibus voluptates vel praesentium alias magni amet nobis facilis?
                            </span>
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
                            <a href="/" className="float-right btn btn-sm btn-primary">View Details</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchItems
