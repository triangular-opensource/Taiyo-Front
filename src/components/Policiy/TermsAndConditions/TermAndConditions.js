import React from 'react'
import useAuth from '../../../config/AuthContext'

const TermAndConditions = () => {

    const {policy} = useAuth();

    return (
        <div className="container py-5">
            <div dangerouslySetInnerHTML={{__html: policy.terms_and_condition}}></div>
        </div>
    )
}

export default TermAndConditions
