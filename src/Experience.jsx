import React from 'react';
import './Experience.css';

const experiences = [
  { year: '2024', role: 'Web Developer Intern', company: 'Tooperworld', details: 'Built responsive web pages with HTML, CSS, and JavaScript.' },
  { year: '2024', role: 'Web Developer Intern', company: 'VeriTech Software IT Services', details: 'Developed some user-friendly, responsive web pages using JavaScript.' },
];

const Experience = () => {
  return (
    <div className="experience-section" id="experience">
      <h2>Experience</h2>
      <div className="timeline">
        {experiences.map((exp, index) => (
          <div key={index} className="timeline-item" data-aos="fade-up">
            <div className="timeline-year">{exp.year}</div>
            <div className="timeline-content">
              <h3>{exp.role} at {exp.company}</h3>
              <p>{exp.details}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
