import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // for navigation
import './Loginsin.css';

const Loginsin = ({ onLogin }) => {
  const navigate = useNavigate(); // ⬅️ initialize navigate

  const [showLogin, setShowLogin] = useState(true);
  const [loginForm, setLoginForm] = useState({ email: '', password: '' });
  const [signupForm, setSignupForm] = useState({ name: '', email: '', password: '' });

  const handleLoginChange = (e) => {
    setLoginForm({
      ...loginForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignupChange = (e) => {
    setSignupForm({
      ...signupForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const username = loginForm.email.split('@')[0];
    onLogin(username);              // ✅ Set login state in App.js
    navigate('/shop');             // ✅ Redirect to /shop
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    onLogin(signupForm.name);      // ✅ Set login state
    navigate('/shop');             // ✅ Redirect to /shop
  };

  return (
    <div className="auth-container">
      <div className="auth-tabs">
        <button 
          className={`tab ${showLogin ? 'active' : ''}`} 
          onClick={() => setShowLogin(true)}
        >
          Login
        </button>
        <button 
          className={`tab ${!showLogin ? 'active' : ''}`} 
          onClick={() => setShowLogin(false)}
        >
          Sign Up
        </button>
      </div>

      {showLogin ? (
        <form className="auth-form" onSubmit={handleLoginSubmit}>
          <h2>Login to Your Account</h2>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={loginForm.email}
            onChange={handleLoginChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={loginForm.password}
            onChange={handleLoginChange}
            required
          />
          <button type="submit" className="auth-button">Login</button>
        </form>
      ) : (
        <form className="auth-form" onSubmit={handleSignupSubmit}>
          <h2>Create an Account</h2>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={signupForm.name}
            onChange={handleSignupChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={signupForm.email}
            onChange={handleSignupChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={signupForm.password}
            onChange={handleSignupChange}
            required
          />
          <button type="submit" className="auth-button">Sign Up</button>
        </form>
      )}
    </div>
  );
};

export default Loginsin;
