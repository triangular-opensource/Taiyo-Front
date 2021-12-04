import React from 'react'
import useAuth from '../../config/AuthContext'

function Contact() {

    const { generalInfo, login } = useAuth();
    const fun = () => {
        login("Taiyo", "1234");
    }

    return (

        <div>
            Hello I am contact
            <div className="">
                <button onClick={fun}>login</button>
                <br />
                <br />
                {generalInfo.email}
                <br />
                {generalInfo.contact}
            </div>
        </div>
    )
}

export default Contact
