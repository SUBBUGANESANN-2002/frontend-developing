import React, { useState } from 'react';
import axios from 'axios';
import './Signup.css';


function Signup() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNo:'',
    password: '',
    confirmPassword: '',
  });

  const [error, setError] = useState(null); 
  const [successMessage, setSuccessMessage] = useState(null); 
  const [registrationSuccess, setRegistrationSuccess] = useState(false); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleRegistration = (e) => {
    e.preventDefault();

    
    axios.post('http://localhost:8082/api/signup', formData) // Use the appropriate URL for your backend
      .then((response) => {
        console.log(response.data);
        setSuccessMessage('Registration successful'); 
        setRegistrationSuccess(true); 
      })
      .catch((err) => {
        if (err.response) {
          
          setError(err.response.data.message); 
        } else {
          console.error(err);
        }
      });
  };

  
  if (registrationSuccess) {
    return (
      <div>
        <h2>Registration Successful!</h2>
        <p>Welcome to our website.</p>
        <button onClick={() => window.location.reload()}>Go to Home Page</button>
      </div>
    );
  }

  
  return (
    <div className="signup-page">
      <h2>Sign Up</h2>
      <form onSubmit={handleRegistration}>
      <div className="form-group">
      <label htmlFor="firstName">First Name</label>
      <input
        type="text"
        id="firstName"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
        required
      />
    </div>

    <div className="form-group">
      <label htmlFor="lastName">Last Name</label>
      <input
        type="text"
        id="lastName"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
        required
      />
    </div>

    <div className="form-group">
      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
      />
    </div>
 

    <div className="form-group">
      <label htmlFor="phoneNo">phoneNo</label>
      <input
        type="tel"
        id="phoneNo"
        name="phoneNo"
        value={formData.phoneNo}
        onChange={handleChange}
        required
      />
    </div>

    <div className="form-group">
      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        required
      />
    </div>

    <div className="form-group">
      <label htmlFor="confirmPassword">Confirm Password</label>
      <input
        type="password"
        id="confirmPassword"
        name="confirmPassword"
        value={formData.confirmPassword}
        onChange={handleChange}
        required
      />
    </div>

    <button type="submit">Sign Up</button>

      </form>
    </div>
  );
}

export default Signup;
