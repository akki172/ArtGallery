import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  // Mock authentication and role
  const isAdmin = true; // Replace with actual authentication logic

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">Art Gallery</Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/gallery">Gallery</Link></li>
        <li><Link to="/artists">Artists</Link></li>
        <li><Link to="/virtualtour">Virtualtour</Link></li>
        <li><Link to="/shop">Shop</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        {isAdmin && (
          <li><Link to="/admin">Admin</Link></li>
        )}
        <li className="auth-links">
          <Link to="/login" className="auth-btn">Login</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
