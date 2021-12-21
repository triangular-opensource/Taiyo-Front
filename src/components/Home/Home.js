import React, { useRef } from 'react'
import useAuth from '../../config/AuthContext';
import AboutData from '../About/AboutData/AboutData'
import Contact from '../Contact/Contact'

const Home = () => {

    const {generalInfo} = useAuth();
    return (
        <div>
                <img
                    src={generalInfo.cover_image_link}
                    style={{ "width" : "100%" , "height" : "700px"}}
                    alt='cover'
                />
                <div id = 'about'>
                    <AboutData />
                </div>
                <div id='contact'>
                    <Contact />
                </div>
        </div>
    )
}

export default Home
