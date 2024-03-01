import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.png';
import './index.css'
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img src={logo} alt="ProtectHer" className="logo" />
        <div>ProtectHer</div>
      </div>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/harresmentcheck">Check Text</Link>
        <Link to="/chatbot" className="chatbot-button">
          Chatbot
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
