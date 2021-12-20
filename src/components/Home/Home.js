import React, { useRef } from 'react'
import useAuth from '../../config/AuthContext';
import AboutData from '../About/AboutData/AboutData'
import Contact from '../Contact/Contact'

function Home() {
    const aboutref = useRef(null);
    const contactref = useRef(null);
    const {generalInfo} = useAuth();
    return (
        <div>
                <img
                    src={generalInfo.cover_image_link}
                    style={{ "width" : "100%" , "height" : "700px"}}
                    alt='cover'
                />
                <AboutData />
                <Contact />
        </div>
    )
}

export default Home
