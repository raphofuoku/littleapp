import React from 'react';
import '../style/About.css';
import MarioandAdrianA from '../assets/MarioandAdrianA.jpg';
import MarioandAdrianb from '../assets/MarioandAdrianb.jpg';

const About = () => {
  return (
    <section className="about-section">
      <div className="about-content">
        <h2 className="about-title">Little Lemon</h2>
        <h4 className="about-location">Chicago</h4>
        <p className="about-description">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
          Velit officia consequat duis enim velit mollit. Exercitation veniam consequat
          sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua
          dolor do amet sint. Velit officia consequat duis enim velit mollit.
        </p>
      </div>

      <div className="about-images">
        <img src={MarioandAdrianb} alt="Mario and Adrian" className="about-image-1" />
        <img src={MarioandAdrianA} alt="Mario and Adrian" className="about-image-2" />
      </div>
    </section>
  );
};

export default About;
