import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css';
export default function 
() {
  return (
    <div>
    <ul id='home'>
        
    <li>
      <Link to="/signup" style={{textDecoration:"none"}}>Signup</Link>
    </li>
    <li>
      <Link to="/login" style={{textDecoration:"none"}}>Login</Link>
    </li>
     </ul>
      
    </div>
  )
}
