import React from 'react'
import "./ProfileData.css"

const ProfileData = () => {
    return (
        <div className="container profileData__container bg-light mb-5 pb-1">
            <h4>Manage Your Profile</h4>
            <div className="table-responsive">
                <table className="table mt-4">
                    <tbody>
                        <tr>
                            <td className="">Your Name</td>
                            <td className="">Manoj Admin</td>
                        </tr>
                        <tr>
                            <td className="">Email Address</td>
                            <td className="">apexmarketing022@gmail.com</td>
                        </tr>
                        <tr>
                            <td className="">Phone Number</td>
                            <td className="">-</td>
                        </tr>
                        <tr>
                            <td className="">You are a(n)</td>
                            <td className="">Broker</td>
                        </tr>
                        <tr>
                            <td className="">Buisness Address</td>
                            <td className="">-</td>
                        </tr>
                        <tr>
                            <td className="">Package Type</td>
                            <td className="">Basic</td>
                        </tr>
                        <tr>
                            <td className="">Package Expiry</td>
                            <td className="">2021-11-21</td>
                        </tr>
                        <tr>
                            <td className="">Free Ads Remaining</td>
                            <td className="">5</td>
                        </tr>
                        <tr>
                            <td className="">Featured Ads Remaining</td>
                            <td className="">0</td>
                        </tr>
                        <tr>
                            <td className="">Bump-up Ads Remaining</td>
                            <td className="">0</td>
                        </tr>
                        <tr>
                            <td className="">Allowed Video Link</td>
                            <td className="">-</td>
                        </tr>
                        <tr>
                            <td className="">Allowed Tags</td>
                            <td className="">-</td>
                        </tr>
                        <tr>
                            <td className="">Allowed Biddings</td>
                            <td className="">0</td>
                        </tr>
                        <tr>
                            <td className="">Allowed Images</td>
                            <td className="">5</td>
                        </tr>
                        <tr>
                            <td className="">Categories</td>
                            <td className="">-</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ProfileData
