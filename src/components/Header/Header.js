import React, { useRef } from 'react'
import { Link, useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom'
import useAuth from '../../config/AuthContext';
import "./Header.css"

function Header(props) {

    const location = useLocation();

    const { generalInfo, logout, state } = useAuth();

    return (
    <>
        {
            location.pathname === "/pdf"
            ? <></>
            : (
                <nav className="navbar sticky navbar-expand-lg navbar-dark bg-dark">
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
                            {/* <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <NavLink className="dropdown-item" to="/">Uncoated Flat Steel</NavLink>
                                <NavLink className="dropdown-item" to="/">HR - Hot Rolled Steel</NavLink>
                                <NavLink className="dropdown-item" to="/">CR - Cold Rolled Steel</NavLink>
                                <NavLink className="dropdown-item" to="/">Coated Flat Steel</NavLink>
                                <NavLink className="dropdown-item" to="/">GP - Galvanized Steel</NavLink>
                            </div> */}
                        </li>
                        </ul>
                    </div>
                    <div className="navbar__right">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <div
                                    className='fullScreen'
                                    style={{
                                       
                                    }}
                                >
                                    <i className="icon ion-android-expand"></i>
                                </div>
                            </li>
                                { !state
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
                                            <li className="nav-item">
                                                <span style={{cursor: "pointer"}} className="nav-link " onClick={logout}>Logout</span>
                                            </li>
                                            <li className="nav-item">
                                                <NavLink className="nav-link" to="/profile">Profile</NavLink>
                                            </li>
                                        </>
                                }
                        </ul>
                        <NavLink to="/post-ad/step-1" className="ml-4 p-2 bg-secondary rounded text-white nav-btn">Buy/Sell</NavLink>
                    </div>
                </nav>
            ) 
        }
    </>
    )
}

export default Header
