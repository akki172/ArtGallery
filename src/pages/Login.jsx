import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  // State variables for username and password
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8080/us/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const message = await response.text();
        console.log(message);
        // Redirect or show success message
      } else {
        const errorMessage = await response.text();
        console.error("Error:", errorMessage);
        alert(errorMessage);
      }
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  const handleSignup = () => {
    navigate('/signup');
  };

  return (
    <div className="login-page-container">
      {/* Left side image container */}
      <div className="login-image-container">
        <img
          src="https://cdn.luxe.digital/media/2019/09/12084600/best-museums-art-galleries-london-tate-modern-luxe-digital.jpg"
          alt="Art Gallery"
          className="login-image"
        />
      </div>

      {/* Right side login form */}
      <div className="login-form-container">
        <h2>Art Gallery Login</h2>
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="login-button">Login</button>
        </form>
        <div className="extra-links">
          <button onClick={handleSignup} className="signup-button">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
