import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-image">
            <img 
              src="https://s3.pelindo.co.id/genc/ptosm/CfE3OjlQ761oDT7CgVIKrAYFPEKfzsLZVvMijdzy.jpeg" 
              alt="Profile Photo" 
              className="profile-image" 
            />
          </div>
          <div className="about-text">
            <h3>Hello! I am a Full Stack Developer</h3>
            <p>
              I am an experienced full stack developer specializing in creating innovative and high-performance web and mobile applications.
              I have expertise in various frontend and backend technologies such as React, Vue.js, Spring Boot, and Golang.
            </p>
            <p>
              With a solution-oriented approach, I always strive to produce clean, efficient, and maintainable code.
              I enjoy facing new challenges and continuously developing my skills to keep up with the latest technological advancements.
            </p>
            <div className="about-details">
              <div className="detail-item">
                <span className="detail-label">Name:</span>
                <span className="detail-value">Muhammad Inal Zaelani</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Email:</span>
                <span className="detail-value">inalzaelani2806@gmail.com</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Location:</span>
                <span className="detail-value">Surabaya, Indonesia</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Availability:</span>
                <span className="detail-value">Available for New Projects</span>
              </div>
            </div>
            <div className="about-buttons">
              <a href="#contact" className="btn primary-btn">Contact Me</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;