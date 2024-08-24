import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import BrowserRouter and Routes
import Login from './Components/Login';
import Signup from './Components/Signup';
import Home from './Components/Home';

function App() {
  return (
    <div>
    <Router>
      <Routes>
      <Route path="/" exact element={<Home/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;