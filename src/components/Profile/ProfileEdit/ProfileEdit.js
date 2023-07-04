import React, { useRef } from 'react'
import ProfileHeader from '../ProfileHeader/ProfileHeader'
import ProfileEditForm from "./ProfileEditForm/ProfileEditForm"
const ProfileEdit = () => {

    const updateHeader = useRef(null)

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-12 mb-5">
                    <ProfileHeader updateProfile={updateHeader} />
                </div>
                <div className="col-md-12 mb-5 pb-4">
                    <ProfileEditForm updateProfile={updateHeader} />
                </div>
            </div>
        </div>
    )
}

export default ProfileEdit
