import React from "react";
import ecellLogo from "../assets/ecell-logo.png";
import { FaBars } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => (
  <header className="navbar">
    {/* Logo Section */}
    <div className="navbar-logo" onClick={() => window.location.href = "/home"}>
      <img src={ecellLogo} alt="E-Cell Logo" />
    </div>

    {/* Navbar Links */}
    <nav className="navbar-links">
      <a href="/home">Home</a>
      <a href="/grid">Grid</a>
      <a
        href="https://www.linkedin.com/in/shraddha-kumari-191206sh/"
        target="_blank"
        rel="noopener noreferrer"
      >
        LinkedIn
      </a>
    </nav>

  </header>
);

export default Navbar;
