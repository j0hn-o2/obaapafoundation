
import React from 'react';
import './About.css';

import aboutBg from './about-bg.webp';

const About = () => {
  return (
    <div className="about-section" style={{ backgroundImage: `url(${aboutBg})` }}>
      <div className="about-content">
        {/* <h2>About Us</h2> */}
        <div className="who-we-are-section">
          <div className="who-we-are-text">
            <h3>Who We Are</h3>
            {/* <h2>Welcome to the Obaapa Felicia Adjei Foundation</h2> */}
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
