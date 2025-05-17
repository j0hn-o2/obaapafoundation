
import React from 'react';
import './About.css';

import aboutBg from './about-bg.webp';

const About = () => {
  return (
    <div className="about-section" style={{ backgroundImage: `url(${aboutBg})` }}>
      <div className="about-content">
            <h3>Who We Are</h3>
            <p>
              The Obaapa Felicia Adjei Foundation is a non-governmental organization (NGO) with a mission to create
              lasting positive change in the lives of vulnerable communities in Ghana. Through a range of programs
              in education, health, women empowerment, and youth development, we strive to bridge gaps and provide
              opportunities for those who need it most.
            </p>
            {/* <br /> */}
            <p>
              We believe that every child deserves quality education, every woman deserves to live with dignity
              and purpose, and every family deserves access to basic healthcare. Our foundation works directly
              with local leaders and grassroots organizations to implement sustainable solutions that address
              these urgent needs.
            </p>
            <p>
              Since our establishment, we have reached hundreds of families across various districts, providing
              school supplies, medical outreach programs, skills training, and micro-financing support. We are
              driven by compassion, equity, and the unwavering belief that true development starts with empowered people.
            </p>
            {/* <br /> */}
            <p>
              Join us as we work hand-in-hand with communities to build a brighter future. Your support—whether
              through volunteering, donations, or partnerships—makes a real difference.
            </p>
      
      </div>
    </div>
  );
};

export default About;
