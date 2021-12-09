import React from 'react'
import { NavLink } from 'react-router-dom'
import useAuth from '../../../config/AuthContext'
import "./ProfileHeader.css"

function ProfileHeader() {

    const {user} = useAuth();

    return (
        <div className="container profileHeader__background">
            <div className="row py-3">
                <div className="col-md-3">
                    <div className="text-center">
                        <img
                            style={{height:"150px", width:"170px", borderRadius:"50%"}}
                            src={user.image}
                            alt="profile_image"
                        />
                    </div>
                </div>
                <div className="col-md-9 p-2">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 profileHeader__name">{user.first_name} {user.middle_name} {user.last_name}</div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <NavLink to="/profile">
                                    <i class="icon ion-person mx-1"></i>
                                    Profile
                                </NavLink>
                                <span className="mx-2">|</span>
                                <NavLink to="/edit-profile">
                                    <i class="icon ion-edit mx-1"></i>
                                    Edit Profile
                                </NavLink>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12 text-secondary mx-1 profileHeader__lastActive">
                                Last Active {user.last_login}
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
