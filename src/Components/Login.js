import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.css';

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const [error, setError] = useState(null); // State to store the error message
  const [successMessage, setSuccessMessage] = useState(null); // State to store the success message
  const navigate = useNavigate(); 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();

    // Make a POST request to your login endpoint
    axios.post('http://localhost:8082/api/login', formData) // Use the appropriate URL for your backend
      .then(response => {
        console.log(response.data);
        setSuccessMessage("Login successful"); // Set the success message
        // Handle success (e.g., set user session and redirect)
        navigate('/Navbar'); 
      })
      .catch(err => {
        if (err.response) {
          // If the error is from the server (HTTP error response)
          setError("Invalid credentials"); // Set an error message
        } else {
          // Handle other errors (e.g., network issues)
          console.error(err);
        }
      });
  };

  return (
    <div className="login-page">
    <h1>" LOGIN  YOUR SCHOOL HERE"</h1>
      
      <form onSubmit={handleLoginSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        {error && <p className="error-message">{error}</p>} {/* Display the error message */}
        {successMessage && <p className="success-message">{successMessage}</p>} {/* Display the success message */}
        <button type="submit">Login</button>
      </form>
      <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
    </div>
  );
};

export default Login;