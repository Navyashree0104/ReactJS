import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"; // ✅ Include Navbar
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import CarDetails from "./pages/CarDetails";
import Admin from "./pages/Admin";
import Profile from "./pages/UserProfile"; // ✅ Profile Page
import PrivateRoute from "./components/PrivateRoute"; // ✅ Protect Dashboard & Admin
import { AuthProvider } from "./context/AuthContext"; 
import { FavoriteProvider } from "./context/FavoriteContext"; 
import { CarProvider } from "./context/CarContext"; 
import { ThemeProvider } from "./context/ThemeContext"; 

const App = () => {
  return (
    <AuthProvider>
      <FavoriteProvider>
        <CarProvider>
          <ThemeProvider>
            <Navbar /> {/* ✅ Navbar included on all pages */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/cardetails/:id" element={<CarDetails />} />
              <Route path="/profile" element={<Profile />} />
              
              {/* ✅ Protect routes with authentication */}
              <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
              <Route path="/admin" element={<PrivateRoute><Admin /></PrivateRoute>} />
            </Routes>
          </ThemeProvider>
        </CarProvider>
      </FavoriteProvider>
    </AuthProvider>
  );
};

export default App;
