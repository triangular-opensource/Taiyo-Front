import React from 'react';
import useAuth from '../../../config/AuthContext';
import './AboutData.css';
import { ReactComponent as AboutSvg } from "../../../global/static/svg/about.svg";
import CustomText from "../../../customComponents/CustomText/CustomText";


const AboutData = () => {
    const {generalInfo} = useAuth();
    return (
        <div className = 'About__Container'>
            <div className = 'About__Container__Left'>
                 <CustomText name = {generalInfo.about} color = 'grey' size = 'large' weight = '400'/>               
            </div>
            <div className = 'About__Container__Right'>
                 <AboutSvg/ >
            </div>
        </div>
    )
}

export default AboutData
