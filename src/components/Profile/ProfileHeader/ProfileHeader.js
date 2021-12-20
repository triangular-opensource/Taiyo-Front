import React from 'react'
import { NavLink } from 'react-router-dom'
import "./ProfileHeader.css"
import defaultImage from "../../../global/static/default.png"
import useToken from '../../../config/useToken'

function ProfileHeader({updateProfile}) {

    const {userData} = useToken();

    return (
        <div className="container profileHeader__background">
            <div className="row py-3">
                <div className="col-md-3">
                    <div className="text-center">
                        <img
                            style={{height:"150px", width:"170px", borderRadius:"50%"}}
                            src={userData().image ? userData().image : defaultImage}
                            alt="profile_image"
                        />
                    </div>
                </div>
                <div className="col-md-9 p-2">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 profileHeader__name">{userData().first_name} {userData().middle_name} {userData().last_name}</div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <NavLink to="/profile">
                                    <i className="icon ion-person mx-1"></i>
                                    Profile
                                </NavLink>
                                <span className="mx-2">|</span>
                                <NavLink ref={updateProfile} to="/edit-profile">
                                    <i className="icon ion-edit mx-1"></i>
                                    Edit Profile
                                </NavLink>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12 text-secondary mx-1 profileHeader__lastActive">
                                Last Active {userData().last_login}
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
            </div>
        </div>
    )
}

export default ProfileHeader
