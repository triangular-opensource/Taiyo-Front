import React from 'react';
import useAuth from '../../../config/AuthContext';
import { ReactComponent as AboutSvg } from "../../../global/static/svg/about.svg";
import CustomText from "../../../customComponents/CustomText/CustomText";


const AboutData = () => {
    const {generalInfo} = useAuth();
    return (
        <div className='container About__Container py-5 my-5'>
            <div className="row">
                <div className='col-md-6 About__Container__Right py-2 mb-5'>
                    <AboutSvg />
                </div>
                <div className='col-md-6 About__Container__Left pt-2'>
                    <CustomText name={generalInfo.about} color='grey' size='large' weight='400'/>               
                </div>
            </div>
        </div>
    )
}

export default AboutData
