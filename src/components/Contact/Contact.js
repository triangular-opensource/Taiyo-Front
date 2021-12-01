import React from 'react'
import useAuth from '../../config/AuthContext'

function Contact() {

    const { generalInfo } = useAuth();

    return (
        <div>
            Hello I am contact
            <div className="">
                {generalInfo.email}
                <br />
                {generalInfo.contact}
            </div>
        </div>
    )
}

export default Contact
