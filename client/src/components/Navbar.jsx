import { useState , useContext } from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';
import logoImage from './img/logo.png';
import ham from './img/menu.png';
import { UserContext } from '../../context/userContext';

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  const {user,logout}=useContext(UserContext);

  const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
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
              <NavLink to="/contact">Contact</NavLink>
            </li>
            <b className='logout'>
              {user ? (
                <>
                  <span>{capitalizeFirstLetter(user.name)}</span>
                  <span onClick={logout}>:Logout</span>
                </>
              ) : (
                <NavLink to="/register">Login|Register</NavLink>
              )}
            </b>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;