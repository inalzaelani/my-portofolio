import React from 'react';
import '../styles/Contact.css';

const Contact = () => {

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title">Contact</h2>
        
        <div className="contact-container contact-centered">
          <div className="contact-info">
            <h3>Let's Connect</h3>
            <p>Interested in working together or have questions? Don't hesitate to contact me!</p>
            
            <div className="info-item">
              <div className="info-icon">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div className="info-details">
                <h4>Location</h4>
                <p>Surabaya, Indonesia</p>
              </div>
            </div>
            
            <div className="info-item">
              <div className="info-icon">
                <i className="fas fa-envelope"></i>
              </div>
              <div className="info-details">
                <h4>Email</h4>
                <p>inalzaelani2806@gmail.com</p>
              </div>
            </div>
            
            
            <div className="social-links">
              <a href="https://www.linkedin.com/in/muhammad-inal-zaelani-534a5816a/" className="social-link" aria-label="LinkedIn">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="https://github.com/inalzaelani" className="social-link" aria-label="GitHub">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://x.com/inalzaelani" className="social-link" aria-label="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://www.instagram.com/inalzaelani/" className="social-link" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;