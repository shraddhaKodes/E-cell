import React from 'react';
import GridSection from './GridSection';
import ecellLogo from '../assets/ecell-logo.png';
import './Grid.css'; // Importing the CSS file for styling

const FirstPage = () => (
  <div className="page-container">
    {/* Figma Design Section */}
    <div className="figma-container">
      <iframe
        src="https://www.figma.com/embed?embed_host=astra&url=https://www.figma.com/file/9J8VnyCdjmvYwi8meTKF8L/Untitled?node-id=0-1"
        title="Figma Design"
        className="figma-iframe"
      >
        Your browser does not support iframes. Please view the content directly at:
        <a href="https://www.figma.com/file/9J8VnyCdjmvYwi8meTKF8L/Untitled?node-id=0-1" target="_blank" rel="noopener noreferrer">
          this link.
        </a>
      </iframe>
    </div>

    {/* E-Cell Logo Section */}
    <div className="logo-container">
      <img src={ecellLogo} alt="E-Cell Logo" className="logo-image" />
    </div>

    <GridSection />
  </div>
);

export default FirstPage;