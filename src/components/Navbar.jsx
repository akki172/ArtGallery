import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ isLoggedIn, username, onLogout }) => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="navbar-brand">ModernArt</Link>
      </div>

      <div className="navbar-center">
        <Link to="/gallery" className="nav-link">Gallery</Link>
        <Link to="/artists" className="nav-link">Artists</Link>
        <Link to="/shop" className="nav-link">Shop</Link>
        <Link to="/virtualtour" className="nav-link">Virtual Tour</Link>
      </div>

      <div className="navbar-right">
        {isLoggedIn ? (
          <div className="user-menu">
            <div className="cart-icon">
              <Link to="/cart">
                <span className="cart-badge">3</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="9" cy="21" r="1"></circle>
                  <circle cx="20" cy="21" r="1"></circle>
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                </svg>
              </Link>
            </div>
            <div className="dropdown">
              <button className="user-btn">
                <img 
                  src={`https://ui-avatars.com/api/?name=${username}&background=random`} 
                  alt={username} 
                  className="user-avatar"
                />
                <span className="username">{username}</span>
              </button>
              <div className="dropdown-content">
                <Link to="/profile" className="dropdown-item">Profile</Link>
                <Link to="/settings" className="dropdown-item">Settings</Link>
                <button onClick={onLogout} className="dropdown-item">Logout</button>
              </div>
            </div>
          </div>
        ) : (
          <div className="auth-buttons">
            <Link to="/loginsin" className="login-btn">Login</Link>
            <Link to="/signup" className="signup-btn">Sign Up</Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;