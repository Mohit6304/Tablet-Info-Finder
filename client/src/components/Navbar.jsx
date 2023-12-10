import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';
import logoImage from './img/logo.png';
import ham from './img/menu.png';

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <NavLink to="/">
            <img src={logoImage} alt="Logo" />
          </NavLink>
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <img src={ham} alt="Hamburger" />
        </div>
        <div className={`nav-elements ${showNavbar && 'active'}`}>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/tab">Tablet A-Z</NavLink>
            </li>
            <li>
              <NavLink to="/reviews">Reviews</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
            <li>
              <NavLink to="/register">Register</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;