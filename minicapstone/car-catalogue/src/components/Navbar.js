import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import DarkModeToggle from "./DarkModeToggle";
import "./Navbar.css";

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="navbar">
      <h1 className="logo">Car Catalogue</h1>
      <div className="nav-links">
        <Link to="/">Home</Link>
        {!user ? (
          <>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
          </>
        ) : (
          <>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/profile">Profile</Link>
            <button className="logout-btn" onClick={logout}>Logout</button>
          </>
        )}
        <DarkModeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
