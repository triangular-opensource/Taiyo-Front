import React from 'react';
import { ReactComponent as AboutSvg } from "../../../global/static/svg/about.svg";
import CustomText from "../../Customs/CustomText/CustomText";


const AboutData = ({about}) => {
    return (
        <div className='container About__Container py-5 my-5' >
            <div className="row">
                <div className='col-md-6 About__Container__Right py-2 mb-5'>
                    <AboutSvg style={{ width: '100%', height: 'auto' }} />
                </div>
                <div className='col-md-6 About__Container__Left pt-2'>
                    <CustomText name={about} color='grey' size='large' weight='400'/>               
                </div>
            </div>
        </div>
    )
}

export default AboutData
