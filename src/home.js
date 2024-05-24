import React from "react";
import "./home.css";
const Home = () => {
  return (
    <div>
      <div className="heading">
        <p>The Voice Of Planet Earth in Every Language!</p>
      </div>
      <h1 className="subhead">Global youth-led Non-Profit Organization</h1>
      <div class="button-container">
        <button name="joinus" class="custom-button">
            <span><p class="button-text">Join Us</p></span>
        </button>
        <button name="awareness" class="custom-button">
            <span><p class="button-text">Awareness Portal</p></span>
        </button>

    </div>
    <div class="intro-section">
        <p class="intro-text">
            We are a Non-Profit Youth-Led Org fostering 
            <span class="highlight">Climate Action</span> 
            by making information accessible in every language possible. 🌱
        </p>
    </div>
    </div>
  );
};

export default Home;
