import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import alertMessage from '../../../global/AlertProvider'
import PostNavbar from '../PostNavbar/PostNavbar'

const UserInformation = () => {

    window.onoffline = () => {
        alertMessage("OOps internet gone!!!");
    }
    window.ononline = () => {
        alertMessage("Connection Restored👍");
    }

    const [postData, setPostData] = useState({
        name: "",
        number: "",
        address: "",
        country: "",
        t_and_c: false
    })
    
    return (
        <div className="container my-5 auth-bg">
            <PostNavbar active3={true} />
            <div className='container pb-4'>
                <div className="row mx-2">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="authorName">Your Name <span className="text-danger">*</span></label>
                            <input type="text" name="" value={postData.name} onChange={e => setPostData({...postData, name: e.target.value})} placeholder='Your Name' id="authorName" className="form-control" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="authorMobile">Mobile Number <span className="text-danger">*</span></label>
                            <input type="text" name="" value={postData.number} onChange={e => setPostData({...postData, number: e.target.value})} placeholder='Mobile Number' id="authorMobile" className="form-control" />
                        </div>
                    </div>
                </div>
                <div className="row mx-2">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="authorAddress">Business Address <span className="text-danger">*</span></label>
                            <input type="text" name=""  value={postData.address} onChange={e => setPostData({...postData, address: e.target.value})} placeholder='Business Address' id="authorAddress" className="form-control" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="authorCountry">Country <span className="text-danger">*</span></label>
                            <input type="text" name="" value={postData.country} onChange={e => setPostData({...postData, country: e.target.value})} placeholder='Country' id="authorCountry" className="form-control" />
                        </div>
                    </div>
                </div>
                <div className="row mx-2">
                    <div className="col-12">
                        <div className="form-group">
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" value={postData.t_and_c} onChange={e => setPostData({...postData, t_and_c: e.target.checked})} name="" id="adTerms" className="custom-control-input" />
                                <label htmlFor="adTerms" className="custom-control-label">
                                    I agree to <NavLink to="/terms">Terms & Conditions</NavLink>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                    <div className="btn btn-success float-right mx-3">Submit</div>
                    <NavLink className="btn btn-primary float-right" to="/post-ad/step-2">Previous</NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserInformation
