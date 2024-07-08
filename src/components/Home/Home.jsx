import React, { useState } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <div className="home-container">
      <div className="hero-content">
        <div className="profile-picture">
          <img src="public/image.png" alt="Pranav" className="profile-image" />
        </div>
        <div className="text-content">
          <h1>Hi, I'm Pranav Malhotra</h1>
          <p>
            I'm a software engineer specializing in building and designing innovative digital experiences. 
          </p>
          <div className="cta-buttons">
        <a href="public/Pranav_Malhotra_Resume.pdf" download className="btn">Download Resume</a>
          <button onClick={togglePopup} className="btn">Contact Me</button>
        </div>
        </div>
        
      </div>

      <div className="why-hire-me">
        <h2>Why Should You Hire Me?</h2>
        <p>
        I possess strong problem-solving and development skills, even at this early stage of my career. I am prepared to adapt to any challenges that come my way. I am committed to a resilient approach and continuously improving my knowledge to add value to both your organization and my personal growth.
        </p>

      </div>

      {isPopupOpen && (
        <div className="popup-backdrop">
          <div className="popup">
            <h3>Contact Information</h3>
            <p>Email: malhotrapranav298@gmail.com</p>
            <p>Phone: (437) 799-6788</p>
            <p>LinkedIn: <a href="https://www.linkedin.com/in/pranav2798" target="_blank" rel="noopener noreferrer">linkedin.com/in/pranavmalhotra</a></p>
            <button onClick={togglePopup} className="close-btn">Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
