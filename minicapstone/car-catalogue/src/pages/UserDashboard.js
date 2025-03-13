import React from "react";
import { Link } from "react-router-dom";

const UserDashboard = () => {
  return (
    <div className="dashboard">
      <h2>Welcome to Your Dashboard</h2>
      <Link to="/favorites">View My Favorites</Link>
    </div>
  );
};

export default UserDashboard;
