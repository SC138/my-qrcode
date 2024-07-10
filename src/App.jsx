// src/App.jsx
import React from 'react';
import Links from './Links';
import './App.css';
import TomImage from './assets/img/Tom.jpg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="card">
          <img src={TomImage} alt="Thomas Chevron" className="profile-image" />
          <h1>Thomas Chevron</h1>
          <p>Développeur Web Junior <br></br>JavaScript - React</p>
          <Links />
        </div>
      </header>
    </div>
  );
}

export default App;
