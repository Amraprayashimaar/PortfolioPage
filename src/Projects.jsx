import React from 'react';
import './Projects.css';

const projects = [
  {
    title: 'Weather App',
    description: 'Displays real-time weather data using React and OpenWeatherMap API.',
    demo: 'https://unrivaled-choux-0b206a.netlify.app',
    github: 'https://github.com/Amraprayashimaar/Weather-App',
  },
  {
    title: 'Language Translator',
    description: 'Translates text and supports speech recognition using APIs.',
    demo: 'https://cool-crepe-389124.netlify.app',
    github: 'https://github.com/Amraprayashimaar/Language-Translator-App',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2 data-aos="fade-up">Projects</h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card" data-aos="flip-left">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.demo} target="_blank" rel="noopener noreferrer">
              Live Demo
            </a>
            <br></br>
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
