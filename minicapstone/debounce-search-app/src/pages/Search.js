import React, { useState, useEffect } from "react";
import UserCard from "../components/UserCard";

const Search = () => {
  const [users, setUsers] = useState(() => {
    return JSON.parse(localStorage.getItem("users")) || [
      { id: 1, name: "Alice", age: 25, location: "New York", email: "alice@example.com" },
      { id: 2, name: "Bob", age: 30, location: "Los Angeles", email: "bob@example.com" }
    ];
  });

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredUsers, setFilteredUsers] = useState(users);
  const [selectedUser, setSelectedUser] = useState(null);
  const [newUser, setNewUser] = useState({ name: "", age: "", location: "", email: "" });

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
    setFilteredUsers(users);
  }, [users]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const results = users.filter(user => user.name.toLowerCase().includes(searchQuery.toLowerCase()));
      setFilteredUsers(results);
    }, 300);
    return () => clearTimeout(timeout);
  }, [searchQuery, users]);

  const handleAddUser = () => {
    if (!newUser.name || !newUser.age || !newUser.location || !newUser.email) return;
    const newUserData = { ...newUser, id: users.length + 1 };
    setUsers([...users, newUserData]);
    setNewUser({ name: "", age: "", location: "", email: "" });
  };

  const handleEditUser = (id, updatedUser) => {
    setUsers(users.map(user => (user.id === id ? updatedUser : user)));
  };

  const handleDeleteUser = (id) => {
    setUsers(users.filter(user => user.id !== id));
    setSelectedUser(null);
  };

  return (
    <div className="search-container">
      <input type="text" placeholder="Search users..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />

      <div className="user-list">
        {filteredUsers.length > 0 ? (
          filteredUsers.map(user => (
            <div key={user.id} className="user-name" onClick={() => setSelectedUser(user)}>
              {user.name}
            </div>
          ))
        ) : (
          <p className="not-found">No users found</p> // 👈 "No users found" message
        )}
      </div>

      {selectedUser && <UserCard user={selectedUser} onEdit={handleEditUser} onDelete={handleDeleteUser} />}

      <div className="add-user-form">
        <h3>Add New User</h3>
        <input type="text" placeholder="Name" value={newUser.name} onChange={(e) => setNewUser({ ...newUser, name: e.target.value })} />
        <input type="number" placeholder="Age" value={newUser.age} onChange={(e) => setNewUser({ ...newUser, age: e.target.value })} />
        <input type="text" placeholder="Location" value={newUser.location} onChange={(e) => setNewUser({ ...newUser, location: e.target.value })} />
        <input type="email" placeholder="Email" value={newUser.email} onChange={(e) => setNewUser({ ...newUser, email: e.target.value })} />
        <button onClick={handleAddUser}>Add User</button>
      </div>
    </div>
  );
};

export default Search;
