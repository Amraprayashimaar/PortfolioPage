import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <h2 data-aos="fade-up">About Me</h2>
      <p data-aos="fade-right">
        Hi! I’m a passionate web developer skilled in HTML, CSS, JavaScript, and React.
      </p>
      <a href="ArpitaMaurya.pdf" download="Arpita_Maurya_Resume">
  <button>Download My Resume</button>
</a>
    </section>
  );
};

export default About;
