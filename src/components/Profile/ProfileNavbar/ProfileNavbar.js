import React from 'react'
import { NavLink } from 'react-router-dom'
import "./ProfileNavbar.css"

function ProfileNavbar() {
    return (
        <div className="container">
            <div className="row text-secondary">
                <NavLink to="/my-ads" className="col-md-2 py-3 border text-center">MY ADS</NavLink>
                <NavLink to="/package-history" className="col-md-2 py-3 border text-center">PACKAGE HISTORY</NavLink>
                <div className="col-md-8 border"></div>
            </div>
        </div>
    )
}

export default ProfileNavbar
