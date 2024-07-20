import React from 'react'
import './style.css'

export const NavBar = () => {
    return (
        <div className="navbar">
            <div className="nav-toggler">
                <span></span>
            </div>
            <ul className="nav">
                <li>
                    <a href="#">
                        <i className="fa-solid fa-house"></i>Home
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i className="fa-solid fa-user"></i>About me
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i className="fa-solid fa-briefcase"></i>Proyects
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i className="fa-solid fa-comments"></i>Contact
                    </a>
                </li>
                <button className="active">
                    <i className="fa-solid fa-file"></i> CV
                </button>
            </ul>
        </div>
    )
}
