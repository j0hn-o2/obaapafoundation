import React, { useState, useEffect } from 'react';
import './Home.css';

import transition1 from '../assets/transition02.jpg';
import transition2 from '../assets/transition04.jpg';
import transition3 from '../assets/transition3.jpg';

import missionImg from './mission1.png';

import educationImg from './education2.jpg';
import healthcareImg from './health.jpeg';
import womenImg from './women.jpg';

import whoWeAre1 from './hero2.jpeg';

const images = [transition1, transition2, transition3];

const Home = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="slideshow">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Slide ${index + 1}`}
            className={`slide ${index === currentImage ? 'active' : ''}`}
          />
        ))}
      </div>

      <section id="home" className="home">
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
          
          <div className="who-we-are-image-wrapper">
            <img
              src={whoWeAre1}
              alt="Who We Are"
              className="who-we-are-image"
            />
          </div>

          
        </div>

        <div className="mission-section" style={{ backgroundImage: `url(${missionImg})` }}>
          <div className="mission-overlay">
            <div className="mission-text-content">
              <h3>Our Mission</h3>
              <p>
                The Obaapa Felicia Adjei Foundation is committed to empowering lives by supporting
                women, children, and underprivileged communities in Ghana. We believe in creating sustainable
                opportunities through education, healthcare, and social intervention programs.
              </p>
              <p>
                Our goal is to remove the barriers that prevent individuals—especially women and young girls—
                from reaching their full potential. We advocate for access to quality education, maternal health,
                and entrepreneurship opportunities that lead to long-term independence and confidence.
              </p>
              <p>
                We collaborate with local leaders and organizations to ensure that our programs are culturally relevant,
                inclusive, and effective. Through community engagement, transparency, and compassion, we strive
                to build a more equitable society for all.
              </p>
            </div>
          </div>
        </div>

        {/* Programs/Highlights */}
        <div className="programs">
          <h3>Our Programs</h3>
          <div className="program-grid">
            <div className="program-card">
              <img src={educationImg} alt="Education Program" className="program-image" />
              <h4>Education Support</h4>
              <p>
                We sponsor students, provide school supplies, and help build learning environments.
              </p>
            </div>
            <div className="program-card">
              <img src={healthcareImg} alt="Healthcare Outreach" className="program-image" />
              <h4>Healthcare Outreach</h4>
              <p>
                From mobile clinics to maternal care, we bring health services to rural communities.
              </p>
            </div>
            <div className="program-card">
              <img src={womenImg} alt="Women Empowerment" className="program-image" />
              <h4>Women Empowerment</h4>
              <p>
                We support women with training, resources, and mentorship for economic freedom.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
