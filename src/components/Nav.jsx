import React, { Component } from 'react';
import './Nav.css';
import {NavLink} from 'react-router-dom';

 class Nav extends Component {
    render() {
        return (
            <nav className="nav">
 
                <ul className="nav-ul">
                    <li>
                        <NavLink className={({ isActive }) => isActive ? "active": undefined} to="/" >Home</NavLink>
                    </li>
                    <li>
                        <NavLink className={({ isActive }) => isActive ? "active": undefined} to="/Projects">Projects</NavLink>
                    </li>
      
                </ul>
            </nav>
        );
    }
}

export default Nav;
