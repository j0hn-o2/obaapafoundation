
import React from 'react';
import './About.css';

import aboutBg from './about-bg.webp';

const About = () => {
  return (
    <div className="about-section" style={{ backgroundImage: `url(${aboutBg})` }}>
      <div className="about-content">
        <h2>About Us</h2>
        <p>
          The Obaapa Felicia Adjei Foundation was established with the vision of empowering
          vulnerable communities, especially women and children, through access to education,
          healthcare, and opportunities for economic growth.
        </p>
        <p>
          We believe in sustainable development driven by compassion, inclusion, and community
          leadership. Through a wide range of programs and partnerships, we strive to build
          a future where everyone has the chance to thrive.
        </p>
        <p>
          The Obaapa Felicia Adjei Foundation is a non-governmental organization dedicated to
          promoting education, health, and women empowerment across Ghana. We work closely
          with communities to support sustainable development initiatives.
        </p>
      </div>
    </div>
  );
};

export default About;
