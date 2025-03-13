import React, { useContext } from "react";
import { FavoriteContext } from "../context/FavoriteContext";

const Dashboard = () => {
  const { favorites } = useContext(FavoriteContext);

  return (
    <div className="dashboard">
      <h2>Your Favorite Cars 🚗💖</h2>
      {favorites.length === 0 ? (
        <p>No favorite cars yet.</p>
      ) : (
        <div className="favorites-list">
          {favorites.map((car) => (
            <div key={car.id} className="favorite-car">
              <img src={car.image} alt={car.model} />
              <h3>{car.brand} {car.model}</h3>
              <p>Year: {car.year}</p>
              <p>Fuel: {car.fuel}</p>
              <p>Price: ${car.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
