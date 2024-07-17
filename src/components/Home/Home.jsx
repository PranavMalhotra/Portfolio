import React, { useState } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.css';

const Home = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <div className="home-container">
      <div className="linkedin-icon">
        <a href="https://www.linkedin.com/in/pranav2798" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin fa-3x"></i>
        </a>
      </div>
      <div className="icon-row">
        <div className="icon-wrapper document-icon">
          <a href="/Portfolio/Pranav_Malhotra_Resume.pdf" download>
            <i className="fa-solid fa-file-lines fa-3x"></i>
          </a>
        </div>
        <div className="profile-picture">
          <img src="/Portfolio/IMG_6789.png" alt="Profile Picture of Pranav" />
        </div>
        <div className="icon-wrapper contact-icon">
          <button onClick={togglePopup}>
            <i className="fas fa-address-card fa-3x"></i>
          </button>
        </div>
      </div>
      <div className="github-icon">
        <a href="https://github.com/PranavMalhotra" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github fa-3x"></i>
        </a>
      </div>
      <div className="hero-content">
        <div className="text-content">
          <h1>Hi, I'm Pranav Malhotra</h1>
          <p>
            I'm a software engineer specializing in building and designing innovative digital experiences.
          </p>
        
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
