import React from "react"
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-menu">
                <div className="navbar-start">
                    <Link className="navbar-item" to="/">
                        about
                </Link>
                    <Link className="navbar-item" to="/portfolio">
                        portfolio
            </Link>
                    <Link className="navbar-item" to="/contact">
                        commissions & contact info
            </Link>
                </div>
            </div>
            <div className="navbar-end"></div>
        </nav>
    )
}

export default Navbar