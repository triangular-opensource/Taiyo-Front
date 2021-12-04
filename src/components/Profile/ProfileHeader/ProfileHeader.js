import React from 'react'
import { NavLink } from 'react-router-dom'
import "./ProfileHeader.css"

function ProfileHeader() {
    return (
        <div className="container profileHeader__background">
            <div className="row py-3">
                <div className="col-md-2">
                    <div className="text-center">
                        <img
                            style={{height:"150px", width:"170px", borderRadius:"50%"}}
                            src="https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg"
                            alt="profile_image"
                        />
                    </div>
                </div>
                <div className="col-md-3 p-2">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 profileHeader__name">Manoj Admin</div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <NavLink to="/profile">
                                    <i class="icon ion-person mx-1"></i>
                                    Profile
                                </NavLink>
                                <span className="mx-2">|</span>
                                <NavLink to="/profile">
                                    <i class="icon ion-edit mx-1"></i>
                                    Edit Profile
                                </NavLink>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12 text-secondary mx-1 profileHeader__lastActive">
                                Last Active 24 mins ago
                            </div>
                        </div>
                        <div className="row mt-2">
                            <div className="col-md-12">
                                <span className="badge badge-primary mx-2 profileHeader__badge">Paid</span>
                                <span className="badge badge-success mx-2 profileHeader__badge">Broker</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-7">
                    <div className="container">
                        <div className="row mt-4 profileHeader__cards">
                            <div className="col-md-4">
                                <div className="profileHeader__card profileHeader__card1 ">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-md-12 profileHeader__cardData">0</div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-12">Product Sold</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="profileHeader__card profileHeader__card2">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-md-12 profileHeader__cardData">1</div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-12">Total Listings</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="profileHeader__card profileHeader__card3">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-md-12 profileHeader__cardData">0</div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-12">Inactive Ads</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileHeader
