import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (email, password) => {
    if (email === "admin@example.com" && password === "password") {
      const userData = { name: "Admin", email };
      setUser(userData);
      localStorage.setItem("user", JSON.stringify(userData));
      return "Login successful!";
    }
    return "Invalid credentials!";
  };

  const signup = (name, email, password, role) => {
    const newUser = { name, email, role };
    localStorage.setItem("user", JSON.stringify(newUser));
    return "Signup successful!";
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// ✅ Custom Hook to Use Auth Context
export const useAuth = () => {
  return useContext(AuthContext);
};
