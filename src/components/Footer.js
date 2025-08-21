import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <h3>My Portfolio</h3>
            <p>Professional Web Developer</p>
          </div>
          
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#about">About Me</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-contact">
            <h4>Contact</h4>
            <p>Surabaya, Indonesia</p>
            <p>inalzaelani2806@gmail.com</p>
            <p>+62 123 4567 890</p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} Muhammad Inal Zaelani. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;