import React, { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import useAuth from '../../config/AuthContext';
import useToken from '../../config/useToken';
import "./Header.css"

const Header = () => {
    
    const {userData, isUser} = useToken()

    const [fullScreenEnabled, setFullScreenEnabled] = useState(false)
    const [userImage, setUserImage] = useState(userData()?.image)

    useEffect(() => {
        (async () => setUserImage(await userData()?.image))() 
    }, [userData])

    const toggleFullScreen = () => {
		if (!document.fullscreenElement) {
			document.documentElement.requestFullscreen();
            setFullScreenEnabled(true)
		} else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
                setFullScreenEnabled(false)
		  }
		}
	  }

    const location = useLocation();

    const { generalInfo, logout} = useAuth();

    return (
    <>
        {
            location.pathname === "/pdf"
            ? <></>
            : (
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <NavLink className="navbar-brand pt-2" to="/">
                        <h3>{generalInfo.name}</h3></NavLink>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" exact to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/contact">Contact</NavLink>
                        </li>
                        <li className="nav-item dropdown">
                            <NavLink className="nav-link" id="navbarDropdown" to="/search">Search</NavLink>
                        </li>
                        </ul>
                    </div>
                    <div className="navbar__right">
                        <ul className="navbar-nav">
                                { !isUser()
                                    ? 
                                        <>
                                            <li className="nav-item">
                                                <NavLink className="nav-link " to="/login">Login</NavLink>
                                            </li>
                                            <li className="nav-item">
                                                <NavLink className="nav-link " to="/register">Register</NavLink>
                                            </li>
                                        </>
                                    :
                                        <>
                                            <li className="nav-item dropdown">
                                                <span className="nav-link dropdown-toggle" id="navbarProfileDropdown" role="button" data-toggle="dropdown" aria-expanded="false">
                                                    <span className='pr-2'>{userData().first_name}</span>
                                                    <img style={{"height": "35px", "width": "35px", "borderRadius": "50%"}} src={userImage} alt="profile" />
                                                </span>
                                                <div className="dropdown-menu">
                                                    <Link className="dropdown-item" to="/profile">
                                                        <div className="container px-0">
                                                            <div className="row">
                                                                <div className="col-12">
                                                                <i className="icon ion-person pr-2"></i>
                                                                        Profile
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                    <div class="dropdown-divider"></div>
                                                    <Link className="dropdown-item" to="/notification">
                                                        <div className="container px-0">
                                                            <div className="row">
                                                                <div className="col-12">
                                                                    <i className="icon ion-ios-bell pr-2"></i>
                                                                    Notifications
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                    <span className="dropdown-item">
                                                        <div className="container px-0">
                                                            <div className="row">
                                                                <div className="col-12">
                                                                    <div
                                                                        onClick={toggleFullScreen}
                                                                        className=''
                                                                    >
                                                                        {
                                                                            fullScreenEnabled
                                                                                ?
                                                                                    <i className="icon ion-android-contract pr-2"></i>
                                                                                :
                                                                                    <i className="icon ion-android-expand pr-2"></i>
                                                                        }
                                                                        Full Screen
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </span>
                                                    <div class="dropdown-divider"></div>
                                                    <span className="dropdown-item" style={{"cursor": "pointer"}} onClick={() => logout()}>
                                                        <div className="container px-0">
                                                            <div className="row">
                                                                <div className="col-12">
                                                                    <i className="icon ion-log-out pr-2"></i>
                                                                    Logout
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </span>
                                                </div>
                                            </li>
                                        </>
                                }
                        </ul>
                        <NavLink to="/post-ad" className="ml-4 p-2 bg-secondary rounded text-white nav-btn">Buy/Sell</NavLink>
                    </div>
                </nav>
            ) 
        }
    </>
    )
}

export default Header
