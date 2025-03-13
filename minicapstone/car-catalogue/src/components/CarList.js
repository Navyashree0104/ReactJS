import React, { useContext } from "react";
import { CarContext } from "../context/CarContext";
import CarCard from "./CarCard";

const CarList = () => {
  const { cars, search, filter } = useContext(CarContext);

  const filteredCars = cars.filter(car =>
    car.brand.toLowerCase().includes(filter.brand.toLowerCase()) &&
    car.fuel.toLowerCase().includes(filter.fuel.toLowerCase()) &&
    car.model.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="car-list">
      {filteredCars.map(car => (
        <CarCard key={car.id} car={car} />
      ))}
    </div>
  );
};

export default CarList;
