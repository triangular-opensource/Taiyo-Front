import React from 'react'
import CustomUserEditForm from '../../../customComponents/CustomUserEditForm/CustomUserEditForm'
import ProfileData from '../ProfileData/ProfileData'
import ProfileHeader from '../ProfileHeader/ProfileHeader'

const ProfileEdit = () => {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-12 mb-5">
                    <ProfileHeader />
                </div>
                <div className="col-md-12 mb-5 pb-4">
                    <CustomUserEditForm />
                </div>
            </div>
        </div>
    )
}

export default ProfileEdit
