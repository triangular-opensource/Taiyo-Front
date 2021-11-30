import React from 'react'
import ProfileData from './ProfileData.js/ProfileData'
import ProfileHeader from './ProfileHeader/ProfileHeader'
import ProfileNavbar from './ProfileNavbar/ProfileNavbar'

function Profile() {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-12 mb-5">
                    <ProfileHeader />
                    <ProfileNavbar />
                </div>
                <div className="col-md-12">
                    <ProfileData />
                </div>
            </div>
        </div>
    )
}

export default Profile
