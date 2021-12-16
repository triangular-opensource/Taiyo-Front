import React from 'react'
import useToken from '../../../config/useToken'
import "./ProfileData.css"

const ProfileData = () => {

    const {userData} = useToken();

    return (
        <div className="container profileData__container bg-light mb-5 pb-1">
            <h4>Manage Your Profile</h4>
            <div className="table-responsive">
                <table className="table mt-4">
                    <tbody>
                        <tr>
                            <td className="">Your Name</td>
                            <td className="">{userData().first_name} {userData().middle_name} {userData().last_name}</td>
                        </tr>
                        <tr>
                            <td className="">Email Address</td>
                            <td className="">{userData().email}</td>
                        </tr>
                        <tr>
                            <td className="">Phone Number</td>
                            <td className="">{userData().phone_number}</td>
                        </tr>
                        <tr>
                            <td className="">You are a(n)</td>
                            <td className="">{userData().user_type}</td>
                        </tr>
                        <tr>
                            <td className="">Buisness Address</td>
                            <td className="">{userData().company_address}, {userData().company_city}, {userData().company_state}, {userData().company_country}, {userData().company_pin_code}</td>
                        </tr>
                        <tr>
                            <td className="">Package Type</td>
                            <td className="">{userData().package_type}</td>
                        </tr>
                        <tr>
                            <td className="">Package Expiry</td>
                            <td className="">{userData().package_expiry}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ProfileData
