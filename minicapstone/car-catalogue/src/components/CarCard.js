import React from "react";
import "./CarCard.css";

const CarCard = ({ car }) => {
  return (
    <div className="car-card">
      <img src={`/images/${car.image}`} alt={car.model} />
      <h3>{car.brand} {car.model}</h3>
      <p>Price: ${car.price}</p>
      <p>Fuel: {car.fuel}</p>
      <p>Year: {car.year}</p>
    </div>
  );
};

export default CarCard;
