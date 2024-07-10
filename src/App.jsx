import React from 'react';
import Links from './Links';
import './App.css';
import Thomasimg from './assets/img/Tom.jpg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Thomas Chevron</h1>
        <img src={Thomasimg} alt="Thomas Chevron" className='thomas-img'/>
        <Links />
      </header>
    </div>
  );
}

export default App;
