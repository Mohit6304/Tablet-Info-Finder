import React from "react";
import "./footer.css";
import { NavLink } from 'react-router-dom';

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          <div className="col">
            <h4>TabletInfoFinder</h4>
            <ul className="list-unstyled">
              <li>500089</li>
              <li>Manikonda ,Hyderabad</li>
              <li>FlatNo.203, Amrutha Hills</li>
            </ul>
          </div>
          
          <div className="col">
            <h4>Explore</h4>
            <ul className="list-unstyled">
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/contact">Contact</NavLink></li>
              <li><NavLink to="/register">Register</NavLink></li>
            </ul>
          </div>
          <div className="col">
            <h4>Contact Us</h4>
            <ul className="list-unstyled">
              <li>Email: info@tabletinfofinder.com</li>
              <li>Phone: +91 81065 96945</li>
            </ul>
          </div>
          <div className="col">
            <h4>More Links</h4>
            <ul className="list-unstyled">
              <li><NavLink to="/tab">Tablet A-z</NavLink></li>
              <li><NavLink to="/reviews">Reviews</NavLink></li>
              <li><NavLink to="/about">About</NavLink></li>
            </ul>
          </div>
        </div>
      </div>
      <hr className="content-divider" />
      <div className="container">
        <p>
          &copy;{new Date().getFullYear()} TabletInfoFinder | All rights reserved | Terms Of Service | Privacy
        </p>
      </div>
    </div>
  );
}

export default Footer;