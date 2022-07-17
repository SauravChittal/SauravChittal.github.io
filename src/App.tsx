import React from 'react';
import './App.css';
import Sidebar from './components/sidebar';
import { Outlet } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faGithub,
    faDiscord,
    faLinkedin,
  } from "@fortawesome/free-brands-svg-icons";

  const Footer = () => (
    <footer>
      <hr />
      <div className="row">
        <p id='p1'>Phone: +1 (217) 953-2146</p>
        <p id='pbreh'>Email: chittal3@illinois.edu</p>
        <p id='pbigbreh'>Follow me on:</p>
      </div>
      <div className="main">
          <a href="https://github.com/SauravChittal/" className='github social'>
              <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
          <a href='https://www.linkedin.com/in/sauravchittal' className='social'>
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
      </div>
    </footer>
  );

function App() {
  return (
    <div className="outer-container" id="outer-container">
      <Sidebar />
      <div className='page'>
      <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
