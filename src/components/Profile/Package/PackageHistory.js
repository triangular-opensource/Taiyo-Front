import React from 'react'
import ProfileHeader from '../ProfileHeader/ProfileHeader'
import ProfileNavbar from '../ProfileNavbar/ProfileNavbar'
import PackageHistoryData from './PackageHistoryData'

const PackageHistory = () => {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-12 mb-5">
                    <ProfileHeader />
                    <ProfileNavbar />
                </div>
                <div className="col-md-12">
                    <PackageHistoryData />
                </div>
            </div>
        </div>
    )
}

export default PackageHistory
