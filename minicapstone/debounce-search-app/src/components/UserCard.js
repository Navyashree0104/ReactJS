import React, { useState } from "react";

const UserCard = ({ user, onEdit, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState(user);

  const handleSave = () => {
    onEdit(user.id, editedUser);
    setIsEditing(false);
  };

  return (
    <div className="user-card">
      {isEditing ? (
        <>
          <input type="text" value={editedUser.name} onChange={(e) => setEditedUser({ ...editedUser, name: e.target.value })} />
          <input type="number" value={editedUser.age} onChange={(e) => setEditedUser({ ...editedUser, age: e.target.value })} />
          <input type="text" value={editedUser.location} onChange={(e) => setEditedUser({ ...editedUser, location: e.target.value })} />
          <input type="email" value={editedUser.email} onChange={(e) => setEditedUser({ ...editedUser, email: e.target.value })} />
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          <h3>{user.name}</h3>
          <p>Age: {user.age}</p>
          <p>Location: {user.location}</p>
          <p>Email: {user.email}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => onDelete(user.id)}>Delete</button>
        </>
      )}
    </div>
  );
};

export default UserCard;
