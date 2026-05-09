import React from 'react';

import ProfileImage from '../assets/profile.jpg';
import SocialBar from '../components/SocialBar.js';

import './Landing.css';

export default function Landing() {
  return (
    <section className="landing">
      <div className="landing-grid">
        <div className="profile-image-col">
          <img
            src={ProfileImage}
            className="profile-image"
            alt="Steve Brundage"
            width="400"
            height="400"
          />
        </div>
        <div className="intro-text-col">
          <div className="intro-section">
            <h1>Hi, I am</h1>
            <h2>Steve Brundage<span className="accent-mark">.</span></h2>
          </div>
          <p className="tagline">A Software Engineer specializing in iOS Development.</p>
          <p className="bio">
            Over 6 years of experience building clean, high-quality experiences.
            <br />
            Passionate about health, wellness, and coffee.
          </p>
        </div>
      </div>
      <SocialBar />
    </section>
  );
}
