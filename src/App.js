// src/Navbar.js
import React from 'react';
import './Navbar.css';
import Home from './home';
const App = () => {
  return (
    <div>
 <div class="nav">
        <div class="navbar-logo">
            <img className='img' src="/Logo.00129f1c05848c338b15.png" alt=""/>
            <div>Maiti Labs</div>
        </div>
        <div class="navbar-menu">
            <div class="navbar-item">Home</div>
            <div class="navbar-item">About</div>
            <div class="navbar-item">Awareness Portal</div>
            <div class="navbar-item">Career</div>
            <div class="navbar-item">Contact</div>
            <div class="navbar-item">Team</div>
        </div>
        <div class="login-button">
            <span>Login</span>
        </div>
    </div>
    <Home/>
    </div>
  );
};

export default App;
