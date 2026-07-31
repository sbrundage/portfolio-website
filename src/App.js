import React from 'react';

import Landing from './sections/Landing.js';
import TutoringPage from './pages/TutoringPage.js';

import './App.css';

function App() {
  // Plain path-based routing — links are real <a> tags, so each navigation is a
  // full page load. No router library needed for two pages.
  const path = window.location.pathname.replace(/\/$/, '');

  return (
    <main className="App">
      {path === '/tutoring' ? <TutoringPage /> : <Landing />}
    </main>
  );
}

export default App;
