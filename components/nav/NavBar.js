import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"

export const NavBar = (props) => {
    return (
        <ul className="navbar">
            <li className="navbar__item active">
                <Link className="navbar__link" to="/nurseries">nurseries</Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="/distributors">distributors</Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="/retailers">retailers</Link>
            </li>
        </ul>
    )
}