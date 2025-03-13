import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";

const UserProfile = () => {
  const { user, updateUser } = useAuth();
  const [updatedUser, setUpdatedUser] = useState({ name: user.name, email: user.email, password: "" });

  const handleChange = (e) => {
    setUpdatedUser({ ...updatedUser, [e.target.name]: e.target.value });
  };

  const handleUpdate = () => {
    updateUser(updatedUser);
    alert("Profile updated successfully!");
  };

  return (
    <div className="user-profile">
      <h2>My Profile</h2>
      <input type="text" name="name" value={updatedUser.name} onChange={handleChange} placeholder="Name" />
      <input type="email" name="email" value={updatedUser.email} onChange={handleChange} placeholder="Email" />
      <input type="password" name="password" value={updatedUser.password} onChange={handleChange} placeholder="New Password" />
      <button onClick={handleUpdate}>Update Profile</button>
    </div>
  );
};

export default UserProfile;
