import React, { useState } from "react";

const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");  // Reset any previous message
  
    try {
      const response = await fetch("http://localhost:8080/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",  // Make sure the backend knows it's JSON
        },
        body: JSON.stringify(formData),  // Ensure formData has the user details
      });
  
      if (response.ok) {
        const data = await response.json();
        setMessage(`Signup successful! Welcome, ${data.username}.`);
      } else {
        const errorText = await response.text();  // Capture any error message from the backend
        setMessage(`Signup failed: ${errorText}`);
      }
    } catch (error) {
      console.error("Error occurred:", error);
      setMessage("Error connecting to the server. Please try again later.");
    }
  };
  

  return (
    <div style={{ maxWidth: "400px", margin: "50px auto", padding: "20px", border: "1px solid #ccc", borderRadius: "10px" }}>
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "15px" }}>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
          />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
          />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
          />
        </div>

        <button type="submit" style={{ width: "100%", padding: "10px", backgroundColor: "#007bff", color: "#fff", border: "none", borderRadius: "5px" }}>
          Signup
        </button>
      </form>

      {message && (
        <div style={{ marginTop: "20px", padding: "10px", backgroundColor: "#f8f9fa", border: "1px solid #ccc", borderRadius: "5px" }}>
          {message}
        </div>
      )}
    </div>
  );
};

export default Signup;