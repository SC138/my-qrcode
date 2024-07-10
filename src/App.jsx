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
          <h1>Thomas Chevron</h1>
          <img src={TomImage} alt="Thomas Chevron" className="profile-image" />
          <Links />
        </div>
      </header>
    </div>
  );
}

export default App;
