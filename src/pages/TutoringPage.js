import React from 'react';

import {
  CONTACT_EMAIL,
  RATE,
  RATE_PER,
  RATE_NOTE,
  whoItsFor,
  whatWeCover,
  howItWorks,
} from '../data/tutoring.js';

import './TutoringPage.css';

const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
  'iOS tutoring inquiry'
)}`;

export default function TutoringPage() {
  return (
    <section className="tutoring-page">
      <a href="/" className="back-link">
        ← Back
      </a>

      <header className="tutoring-header">
        <h1>
          iOS Tutoring<span className="accent-mark">.</span>
        </h1>
        <p className="tutoring-intro">
          1:1 lessons in Swift and iOS development with a senior engineer. The
          goal is not to finish another tutorial — it is to get your app on the
          App Store.
        </p>

        <div className="rate">
          <span className="rate-amount">
            {RATE}
            <span className="rate-per">{RATE_PER}</span>
          </span>
          <span className="rate-note">{RATE_NOTE}</span>
        </div>

        <div className="cta-row">
          <a className="cta cta-primary" href={mailto}>
            Get in touch
          </a>
          <a
            className="cta cta-secondary"
            href="/Stephen_Brundage_Resume.pdf"
            download="Stephen_Brundage_Resume.pdf"
          >
            Download my resume
          </a>
        </div>
      </header>

      <article className="tutoring-section">
        <h2>Who this is for</h2>
        <ul>
          {whoItsFor.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </article>

      <article className="tutoring-section">
        <h2>What we cover</h2>
        <ul>
          {whatWeCover.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p className="section-note">
          Every plan is built around what you are trying to build. If you show
          up with a specific idea, we work on that idea.
        </p>
      </article>

      <article className="tutoring-section">
        <h2>How it works</h2>
        <ul>
          {howItWorks.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </article>

      <article className="tutoring-section">
        <h2>Why me</h2>
        <p>
          I am a senior iOS engineer with over 6 years of experience building
          and shipping production apps. I have mentored developers on my own
          teams, reviewed a lot of code, and sat on the other side of the
          interview table. I know which details matter early and which ones are
          a waste of your time right now.
        </p>
      </article>

      <div className="closing">
        <h2>Ready to start?</h2>
        <p>
          Tell me what you want to build and where you are starting from. I will
          tell you honestly whether I can help.
        </p>
        <a className="cta cta-primary" href={mailto}>
          Email me
        </a>
        <p className="availability">
          Taking on a limited number of students to keep quality high.
        </p>
      </div>
    </section>
  );
}
