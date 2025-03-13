import React, { createContext, useState } from "react";

export const FavoriteContext = createContext(); // ✅ Named export

export const FavoriteProvider = ({ children }) => { // ✅ Named export
  const [favorites, setFavorites] = useState([]);

  const addFavorite = (car) => {
    setFavorites([...favorites, car]);
  };

  const removeFavorite = (id) => {
    setFavorites(favorites.filter((car) => car.id !== id));
  };

  return (
    <FavoriteContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
      {children}
    </FavoriteContext.Provider>
  );
};
