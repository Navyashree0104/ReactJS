import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext"; // Make sure this exists

const DarkModeToggle = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  return (
    <button onClick={() => setDarkMode((prev) => !prev)}>
      {darkMode ? "Light Mode" : "Dark Mode"}
    </button>
  );
};

export default DarkModeToggle;
