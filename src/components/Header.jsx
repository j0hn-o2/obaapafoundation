// import React from 'react';
// import { NavLink } from 'react-router-dom';
// import './Header.css';
// import Logo from './logo.jpg'; 


// const Header = () => (
//   <header className="header">
//     <div className="header-left">
//       { Logo image }
//       <img
//       src={Logo}
//         alt="Obaapa Felicia Adjei Foundation logo"
//         className="logo"
//       />
//       <h1>OBAAPA FELICIA ADJEI<br/> FOUNDATION</h1>
//     </div>
//     <nav>
//       <ul className="nav-links">
//         <li>
//           <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>
//             HOME
//           </NavLink>
//         </li>
//         <li>
//           <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>
//             ABOUT
//           </NavLink>
//         </li>
//         <li>
//           <NavLink to="/donate" className={({ isActive }) => isActive ? 'active' : ''}>
//             DONATE
//           </NavLink>
//         </li>
//       </ul>
//     </nav>
//   </header>
// );

// export default Header;

import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import Logo from './logo.jpg';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-left">
        <img src={Logo} alt="Obaapa Felicia Adjei Foundation logo" className="logo" />
        <h1>OBAAPA FELICIA ADJEI<br /> FOUNDATION</h1>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>
      </div>
      
      <nav className={`nav ${menuOpen ? 'open' : ''}`}>
        <ul className="nav-links">
          <li>
            <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''} onClick={() => setMenuOpen(false)}>
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''} onClick={() => setMenuOpen(false)}>
              ABOUT
            </NavLink>
          </li>
          <li>
            <NavLink to="/donate" className={({ isActive }) => isActive ? 'active' : ''} onClick={() => setMenuOpen(false)}>
              DONATE
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
