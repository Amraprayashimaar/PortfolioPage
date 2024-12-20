import React from 'react';
import { Container, Typography } from '@mui/material';
import './Skills.css';

const skills = [
  { name: 'HTML', level: 90 },
  { name: 'CSS', level: 85 },
  { name: 'JavaScript', level: 80 },
  { name: 'React', level: 75 },
  { name: 'Material-UI', level: 70 },
  { name: 'Git & GitHub', level: 65 },
  { name: 'Netlify & Vercel', level: 60 },
];

const Skills = () => {
  return (
    <Container id="skills" className="skills-container">
      <Typography variant="h3" align="center">
        Skills
      </Typography>
      <div className="skills-list">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            <span className="skill-name">{skill.name}</span>
            <div className="skill-bar">
              <div
                className="skill-progress"
                style={{ width: `${skill.level}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Skills;

