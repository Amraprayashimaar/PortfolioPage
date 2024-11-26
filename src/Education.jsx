import React from 'react';
import './Education.css';

const education = [
  { year: '2024', degree: 'Bachelors of Computer Application', institution: 'Mahatma Gandhi Kashi Vidyapith University' },
  { year: '2022', degree: 'Intermediate', institution: 'Green View Public School' },
];

const Education = () => {
  return (
    <div className="education-section" id="education">
      <h2>Education</h2>
      <div className="education-cards">
        {education.map((edu, index) => (
          <div key={index} className="education-card">
            <div className="card-inner">
              <div className="card-front">
                <h3>{edu.year}</h3>
              </div>
              <div className="card-back">
                <h3>{edu.degree}</h3>
                <p>{edu.institution}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
