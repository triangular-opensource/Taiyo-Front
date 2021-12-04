import React from 'react'
import useAuth from '../../../config/AuthContext'

const AboutData = () => {

    const {generalInfo} = useAuth();

    return (
        <div>
            {generalInfo.about}
        </div>
    )
}

export default AboutData
