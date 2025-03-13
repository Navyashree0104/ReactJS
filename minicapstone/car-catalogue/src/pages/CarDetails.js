import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { CarContext } from "../context/CarContext";

const CarDetails = () => {
  const { id } = useParams();
  const { cars, favorites, addToFavorites, removeFromFavorites } = useContext(CarContext);

  const car = cars.find((c) => c.id === parseInt(id));

  if (!car) {
    return <h2>Car not found!</h2>;
  }

  const isFavorite = favorites.some((fav) => fav.id === car.id);

  return (
    <div className="car-details">
      <img src={car.image} alt={car.model} />
      <h2>{car.brand} {car.model}</h2>
      <p>Year: {car.year}</p>
      <p>Fuel: {car.fuel}</p>
      <p>Price: ${car.price}</p>
      <button onClick={() => isFavorite ? removeFromFavorites(car.id) : addToFavorites(car)}>
        {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
      </button>
    </div>
  );
};

export default CarDetails;
