import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../logoHenry.png'

import './Navbar.css';

export default function NavBar() {
    return (
        <header className="navbar">
            <div className="Titulo">
                <img id="logoHenry" src={Logo} width="30" height="30" className="d-inline-block align-top" alt="" />
                <h2>The Movie Db</h2>
            </div>
            <nav>
                <ul className="list">
                    <li className="list-item">
                        <NavLink exact to="/" >Home</NavLink>
                        <NavLink to="/favs" >Favorites</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}