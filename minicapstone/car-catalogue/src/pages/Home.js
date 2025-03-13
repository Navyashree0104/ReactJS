import React, { useContext } from "react";
import { CarContext } from "../context/CarContext";

const Home = () => {
  const { cars } = useContext(CarContext); // ✅ Use correct context

  return (
    <div>
      <h1>Car Catalogue</h1>
      <ul>
        {cars.map((car) => (
          <li key={car.id}>{car.brand} - {car.model}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
