import React from "react";
import { useParams, Link } from "react-router-dom";

const UserDetails = () => {
  let { id } = useParams();
  return (
    <div className="container">
      <h1>User Details</h1>
      <p>Details of user with ID: {id}</p>
      <Link to="/search" className="back-btn">Back to Search</Link>
    </div>
  );
};

export default UserDetails;
