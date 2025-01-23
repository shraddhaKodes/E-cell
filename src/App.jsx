import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import FirstPage from './components/Grid';
import SecondPage from './components/SecondPage';
import './App.css';  // Importing the external CSS

const About = () => (
  <div className="about-container">
      <div className="about-card">
        <h1 className="about-title">
          Welcome to E-Cell !!
        </h1>
        <p className="about-description">
          At E-Cell, we strive to foster an entrepreneurial spirit and empower
          individuals to bring their innovative ideas to life. Join us to
          explore endless opportunities and unlock your potential.
        </p>
      </div>
  </div>
);

const App = () => (
  <Router>
    {/* Navigation Bar */}
    <Navbar />

    {/* Application Routes */}
    <Routes>
      <Route path="/" element={<About />} />
      <Route path="/grid" element={<FirstPage />} />
      <Route path="/home" element={<SecondPage />} />
    </Routes>
  </Router>
);

export default App;
