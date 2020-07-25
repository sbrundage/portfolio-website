import React from 'react';
import Particles from 'react-particles-js';

import Landing from './sections/Landing.js';

import './App.css';

function App() {
  return (
    <div className="App">
      <Particles className="particles" style={{zIndex:1}}
        params={{ 
          particles: { 
            links: {
              color: {
                value: "#00e5ff"
              }
            },
            color: {
              value: "#000000"
            },
            number: { 
              value: 200, 
              density: { 
                enable: true, 
                value_area: 3000, 
              } 
            }, 
          }, 
        }} 
      /> 
      <Landing />
    </div>
  );
}

export default App;
