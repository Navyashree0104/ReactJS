import React, { useContext } from "react";
import { CarContext } from "../context/CarContext";
import { Link } from "react-router-dom";

const Favorites = () => {
  const { favorites, removeFromFavorites } = useContext(CarContext);

  return (
    <div className="favorites">
      <h2>My Favorite Cars</h2>
      {favorites.length === 0 ? (
        <p>No favorite cars yet.</p>
      ) : (
        favorites.map((car) => (
          <div key={car.id} className="car-card">
            <img src={car.image} alt={car.model} />
            <h3>{car.brand} {car.model}</h3>
            <p>Year: {car.year}</p>
            <p>Fuel: {car.fuel}</p>
            <p>Price: ${car.price}</p>
            <Link to={`/car/${car.id}`}>View Details</Link>
            <button onClick={() => removeFromFavorites(car.id)}>Remove</button>
          </div>
        ))
      )}
    </div>
  );
};

export default Favorites;
