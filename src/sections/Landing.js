import React from 'react';

import ProfileImage from '../assets/best-optimized-me.jpg';
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
          {/* TODO: edit bio to your voice */}
          <p className="bio">
            Shipping iOS apps by day and tinkering with side projects after hours.
            <br />
            Outside of code: training, reading, and a fitness web app in progress.
          </p>
        </div>
      </div>
      <SocialBar />
    </section>
  );
}
