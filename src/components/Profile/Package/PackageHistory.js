import React, { useEffect } from 'react'
import ProfileHeader from '../ProfileHeader/ProfileHeader'
import ProfileNavbar from '../ProfileNavbar/ProfileNavbar'
import PackageHistoryData from './PackageHistoryData'
import useToken from '../../../config/useToken'
import useAuth from '../../../config/AuthContext'

const PackageHistory = (props) => {

    const {getUserData} = useAuth()
    const {getToken} = useToken();

    useEffect(() => {
        getUserData(getToken());
    }, [])

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
