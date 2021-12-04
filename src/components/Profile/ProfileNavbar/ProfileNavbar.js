import React from 'react'
import { NavLink } from 'react-router-dom'
import "./ProfileNavbar.css"

function ProfileNavbar() {
    return (
        <div className="container">
            <div className="row text-secondary">
                <div className="col-md-2 py-3 border text-center dropdown-toggle" style={{cursor: "pointer"}} data-toggle="dropdown" id="profileNavbar">MY ADS</div>
                <div className="dropdown-menu" aria-labelledby="profileNavbar">
                    <a className="dropdown-item" href="/">My Ads</a>
                    <a className="dropdown-item" href="/">Rejected Ads</a>
                    <a className="dropdown-item" href="/">Inactive Ads</a>
                    <a className="dropdown-item" href="/">Featured Ads</a>
                    <a className="dropdown-item" href="/">Shortlisted</a>
                </div>
                <NavLink to="/chat" className="col-md-2 py-3 border text-center">MESSAGES</NavLink>
                <NavLink to="/" className="col-md-2 py-3 border text-center">PACKAGES</NavLink>
                <NavLink to="/package-history" className="col-md-2 py-3 border text-center">PACKAGE HISTORY</NavLink>
                <div className="col-md-4 border"></div>
            </div>
        </div>
    )
}

export default ProfileNavbar
