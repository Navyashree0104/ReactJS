import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ toggleDarkMode, darkMode }) => {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-home">🏠 Home</Link>
      <Link to="/search" className="nav-search">🔍 Search</Link>
      <button className="dark-mode-btn" onClick={toggleDarkMode}>
        {darkMode ? "🌞 Light Mode" : "🌙 Dark Mode"}
      </button>
    </nav>
  );
};

export default Navbar;
