import React from 'react'
import useAuth from '../../../config/AuthContext'

const PrivacyPolicy = () => {

    const {policy} = useAuth();

    return (
        <div className="container py-5">
            <div dangerouslySetInnerHTML={{__html: policy.privacy_policies}}></div>
        </div>
    )
}

export default PrivacyPolicy
