// import React from 'react';
// import './Header.css';

// const Header = () => {
//   return (
//     <header className="header">
//       <h1>Obaapa Felicia Adjei Foundation</h1>
//       <nav>
//         <ul className="nav-links">
//           <li><a href="#home">Home</a></li>
//           <li><a href="#about">About</a></li>
//           <li><a href="#donate">Donate</a></li>
//         </ul>
//       </nav>
//     </header>
//   );
// };

// export default Header;

import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => (
  <header className="header">
    <h1>Obaapa Felicia Adjei Foundation</h1>
    <nav>
      <ul className="nav-links">
        <li>
          <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/donate" className={({ isActive }) => isActive ? 'active' : ''}>
            Donate
          </NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;

