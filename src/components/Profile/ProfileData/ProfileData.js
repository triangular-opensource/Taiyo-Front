import React from 'react'
import useAuth from '../../../config/AuthContext'
import "./ProfileData.css"

const ProfileData = () => {

    const {user} = useAuth();

    return (
        <div className="container profileData__container bg-light mb-5 pb-1">
            <h4>Manage Your Profile</h4>
            <div className="table-responsive">
                <table className="table mt-4">
                    <tbody>
                        <tr>
                            <td className="">Your Name</td>
                            <td className="">{user.first_name} {user.middle_name} {user.last_name}</td>
                        </tr>
                        <tr>
                            <td className="">Email Address</td>
                            <td className="">{user.email}</td>
                        </tr>
                        <tr>
                            <td className="">Phone Number</td>
                            <td className="">{user.phone_number}</td>
                        </tr>
                        <tr>
                            <td className="">You are a(n)</td>
                            <td className="">{user.user_type}</td>
                        </tr>
                        <tr>
                            <td className="">Buisness Address</td>
                            <td className="">{user.company_address}, {user.company_city}, {user.company_state}, {user.company_country}, {user.company_pin_code}</td>
                        </tr>
                        <tr>
                            <td className="">Package Type</td>
                            <td className="">{user.package_type}</td>
                        </tr>
                        <tr>
                            <td className="">Package Expiry</td>
                            <td className="">{user.package_expiry}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ProfileData
