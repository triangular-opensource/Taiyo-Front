import React from 'react'
import "./Header.css"

function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="/"><h1>TAIYO</h1></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <a className="nav-link py-4" href="/">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item py-3 dropdown">
                    <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown">Search</a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a className="dropdown-item" href="/">Uncoated Flat Steel</a>
                        <a className="dropdown-item" href="/">HR - Hot Rolled Steel</a>
                        <a className="dropdown-item" href="/">CR - Cold Rolled Steel</a>
                        <a className="dropdown-item" href="/">Coated Flat Steel</a>
                        <a className="dropdown-item" href="/">GP - Galvanized Steel</a>
                    </div>
                </li>
                <li className="nav-item">
                    <a className="nav-link py-4" href="/">About</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link py-4" href="/">Contact</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link py-4" href="/">Buy/Sell</a>
                </li>
                </ul>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a className="nav-link py-4" href="/">Login</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link py-4" href="/">Register</a>
                    </li>
                </ul>
            </div>
            <a href="/" className="ml-4 p-4 bg-secondary rounded text-white nav-btn">Buy/Sell</a>
        </nav>
    )
}

export default Header
