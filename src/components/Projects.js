import React, { useState } from 'react';
import '../styles/Projects.css';

const Projects = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openImagePopup = (imageUrl) => {
    setSelectedImage(imageUrl);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when popup is open
  };

  const closeImagePopup = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto'; // Re-enable scrolling
  };

  const projects = [
    {
      title: 'PTOS-M (Pelindo Terminal Operating System Multipurpose) Mobile',
      description: 'Mobile application used for managing port operations. This system enhances the efficiency of port activities by providing real-time data, streamlining logistics, and improving operational workflows.',
      technologies: ['Android Native', 'Java'],
      imageUrl: 'https://s3.pelindo.co.id/genc/ptosm/QMD8YHMN0GATlKmFuDCaUQDP9H30B3M4Od19vFzr.jpeg',
      liveUrl: '#',
      githubUrl: '#'
    },
      {
      title: 'PTOS-M (Pelindo Terminal Operating System Multipurpose) Web',
      description: 'Web application used for managing port operations. This system enhances the efficiency of port activities by providing real-time data, streamlining logistics, and improving operational workflows.',
      technologies: ['ASP NET MVC', 'Spring Boot', 'Vue.js','Oracle SQL','Stored Procedure'],
      imageUrl: 'https://s3.pelindo.co.id/genc/ptosm/H5wjmwFd5E7zhENhMI16jlf4GDaSq1kDHpFgRMrk.png',
      liveUrl: '#',
      githubUrl: '#'
    },
     {
      title: 'IBS (Integrated Billing System)',
      description: 'I manage and improve the IBS, which is designed to offer customers seamless access to services and relevant information. My role includes ensuring the platforms smooth performance, implementing new features, and addressing any technical issues.',
      technologies: ['ASP NET MVC', 'Spring Boot', 'Vue.js','Oracle SQL','Stored Procedure'],
      imageUrl: 'https://s3.pelindo.co.id/genc/ptosm/SbmfzbohMzNzBqEuGtGPzBtUoBcDCMajOp1eDXet.png',
      liveUrl: '#',
      githubUrl: '#'
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image" onClick={() => project.imageUrl && openImagePopup(project.imageUrl)}>
                {project.imageUrl ? (
                  <img src={project.imageUrl} alt={project.title} className="project-img" />
                ) : (
                  <div className="project-placeholder"></div>
                )}
              </div>
              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div className="image-popup-overlay" onClick={closeImagePopup}>
          <div className="image-popup-container">
            <img src={selectedImage} alt="Project Preview" className="image-popup" />
            <button className="close-popup" onClick={closeImagePopup}>&times;</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;