import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import Logo from './logo.jpg'; // Adjust the path as necessary
// Adjust the path as necessary

const Header = () => (
  <header className="header">
    <div className="header-left">
      {/* Logo image */}
      <img
      src={Logo}
        alt="Obaapa Felicia Adjei Foundation logo"
        className="logo"
      />
      <h1>OBAAPA FELICIA ADJEI<br/> FOUNDATION</h1>
    </div>
    <nav>
      <ul className="nav-links">
        <li>
          <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>
            ABOUT
          </NavLink>
        </li>
        <li>
          <NavLink to="/donate" className={({ isActive }) => isActive ? 'active' : ''}>
            DONATE
          </NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
