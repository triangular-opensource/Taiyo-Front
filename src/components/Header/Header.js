import React from 'react'
import { NavLink } from 'react-router-dom'
import useAuth from '../../config/AuthContext';
import "./Header.css"

function Header() {

    const { generalInfo, authenticated, logout } = useAuth();

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <NavLink className="navbar-brand" to="/"><h1>{generalInfo.name}</h1></NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <NavLink className="nav-link py-4" to="/">Home</NavLink>
                </li>
                <li className="nav-item py-3 dropdown">
                    <span className="nav-link dropdown-toggle" id="navbarDropdown">Search</span>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <NavLink className="dropdown-item" to="/">Uncoated Flat Steel</NavLink>
                        <NavLink className="dropdown-item" to="/">HR - Hot Rolled Steel</NavLink>
                        <NavLink className="dropdown-item" to="/">CR - Cold Rolled Steel</NavLink>
                        <NavLink className="dropdown-item" to="/">Coated Flat Steel</NavLink>
                        <NavLink className="dropdown-item" to="/">GP - Galvanized Steel</NavLink>
                    </div>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link py-4" to="/about">About</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link py-4" to="/contact">Contact</NavLink>
                </li>
                </ul>
            </div>
            <div className="navbar__right">
                <ul className="navbar-nav">
                    <li className="nav-item mx-3">
                        { !authenticated
                            ? 
                                <NavLink className="nav-link py-4" to="/login">Login</NavLink>
                            :
                                <span className="nav-link py-4" onClick={logout(false)}>Logout</span>
                        }    
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link py-4" to="/profile">Profile</NavLink>
                    </li>
                </ul>
                <NavLink to="/buy-sell" className="ml-4 p-4 bg-secondary rounded text-white nav-btn">Buy/Sell</NavLink>
            </div>
        </nav>
    )
}

export default Header
