import React from 'react'
import useAuth from '../../config/AuthContext';
import AboutData from './AboutData/AboutData'
import AppDownload from './AppDownload/AppDownload'

function About() {

    const {generalInfo} = useAuth();
    return (
        <div>
        <AboutData  about = {generalInfo.about} />
        {
            (generalInfo.android_store !== null && generalInfo.apple_store !== null ) 
            ? <AppDownload  android={generalInfo.android_store} apple = {generalInfo.apple_store} /> 
            : <></>
        }
        </div>
    )
}

export default About
