import React from 'react';
import './Experience.css';

const Experience = () => {
  return (
    <div className="main-container">
      <div className="sidebar">
        <div className="circle1"></div>
        <div className="circle2"></div>
      </div>
      <div className="experience-container">
        <div className="circle-text1">
          <h2 className="EXPtitle">Front-End Development Intern</h2>
          <p className="Cname1">Cha-Chi Communications Pvt. Ltd.</p>
          <ul>
            <li>Designed and implemented UI/UX modifications to client’s website using React JS.</li>
            <li>Firebase Integration: Managed real-time data with a 20% increase in retrieval speed.</li>
            <li>Integrated MongoDB for backend data storage and retrieval, optimizing database performance and ensuring data integrity.</li>
            <li>Proficiently used Git for version control, AWS for cloud-based development, and JIRA for streamlined project management, ensuring 90% on-time project delivery.</li>
          </ul>
        </div>
        
        <div className="circle-text2">
          <h2 className="EXPtitle">Technology Process Trainee</h2>
          <p className="Cname2">Ameriprise Financial</p>
          <ul>
            <li>Improved multiple components of a React application and website based on user feedback, resulting in 20% faster page load time.</li>
            <li>Conducted rigorous unit testing, achieving a 95% code coverage and reducing bug reports by 40%.</li>
            <li>Designed intuitive and visually appealing user interfaces using Figma and Adobe XD.</li>
            <li>Executed advanced SQL queries on AWS Athena to extract valuable insights for decision-making.</li>
            <li>Created responsive and mobile-friendly web applications, ensuring compatibility across various devices and screen sizes, which led to a 35% increase in mobile traffic.</li>
            <li>Managed version control with BitBucket and tracked tasks using JIRA to ensure organized and efficient development.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Experience;
