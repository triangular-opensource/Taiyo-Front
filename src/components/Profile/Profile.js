import React from 'react'
import useToken from '../../config/useToken';
import Friends from './Friends/Friends';
import ProfileData from './ProfileData/ProfileData'
import ProfileHeader from './ProfileHeader/ProfileHeader'
import ProfileNavbar from './ProfileNavbar/ProfileNavbar'

function Profile() {

    const {userData} = useToken();
    console.log(userData());

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-12 mb-5">
                    <ProfileHeader />
                    <ProfileNavbar />
                </div>
                <div className="col-md-12">
                    <ProfileData />
                    <Friends />
                </div>
            </div>
        </div>
    )
}

export default Profile
