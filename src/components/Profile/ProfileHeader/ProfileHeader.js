import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import "./ProfileHeader.css"
import defaultImage from "../../../global/static/default.png"
import useToken from '../../../config/useToken'

function ProfileHeader({updateProfile}) {

    const {userData} = useToken();
    const [userImage, setUserImage] = useState(userData().image)

    useEffect(() => {
        (async () => setUserImage(await userData()?.image))() 
    }, [userData])


    return (
        <div className="container profileHeader__background">
            <div className="row py-3">
                <div className="col-md-3">
                    <div className="text-center">
                        <img
                            style={{height:"150px", width:"170px", borderRadius:"50%"}}
                            src={userImage ? userImage : defaultImage}
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
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileHeader
