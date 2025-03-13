import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const PrivateRoute = ({ element, role }) => {
  const { user } = useAuth();

  if (!user) return <Navigate to="/login" />;
  if (role === "admin" && user.role !== "admin") return <Navigate to="/" />;

  return element;
};

export default PrivateRoute;
