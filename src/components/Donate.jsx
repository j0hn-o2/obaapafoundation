
import React from 'react';
import './Donate.css';
// import donateBg from './donate-bg.jpg';

const Donate = () => {
  return (
    // <div className="donate-section" style={{ backgroundImage: `url(${donateBg})` }}>
      <div className="donate-overlay">
        <div className="donate-content">
          <h2>Support Our Work</h2>
          <p>
            Your donation to the Obaapa Felicia Adjei Foundation helps us continue empowering
            women, children, and underprivileged communities across Ghana. With your support, we
            can expand access to education, healthcare, and economic opportunities.
          </p>
          <p>
            Whether it's through monthly contributions, sponsorships, or one-time gifts,
            every amount makes a meaningful difference. Join us in building a more inclusive and
            empowered future for all.
          </p>
          <p>
            To make a donation, please click the button below. Your generosity is greatly appreciated!
          </p>
          <button className="donate-button">Donate Now</button>
        </div>
      </div>
    // </div>
  );
};

export default Donate;



