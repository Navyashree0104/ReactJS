import React, { createContext, useContext, useState } from "react";

export const CarContext = createContext();

export const CarProvider = ({ children }) => {
  const [cars, setCars] = useState([
    { id: 1, brand: "Toyota", model: "Camry", year: 2022, fuel: "Petrol", price: 25000, image: "toyota-camry.jpg" }
  ]);

  const addCar = (car) => {
    setCars([...cars, { ...car, id: Date.now() }]);
  };

  const editCar = (id, updatedCar) => {
    setCars(cars.map((car) => (car.id === id ? { ...car, ...updatedCar } : car)));
  };

  const deleteCar = (id) => {
    setCars(cars.filter((car) => car.id !== id));
  };

  return (
    <CarContext.Provider value={{ cars, addCar, editCar, deleteCar }}>
      {children}
    </CarContext.Provider>
  );
};

// ✅ Export useCars Hook
export const useCars = () => useContext(CarContext);
