import React, { useState, useContext } from "react";
import { CarContext } from "../context/CarContext";
import "./Filters.css";

const Filters = () => {
  const { filterCars } = useContext(CarContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [fuelType, setFuelType] = useState("");
  const [sortType, setSortType] = useState("");

  const handleFilter = () => {
    filterCars(searchTerm, fuelType, sortType);
  };

  return (
    <div className="filters">
      <input
        type="text"
        placeholder="Search by brand or model..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <select value={fuelType} onChange={(e) => setFuelType(e.target.value)}>
        <option value="">All Fuel Types</option>
        <option value="Petrol">Petrol</option>
        <option value="Diesel">Diesel</option>
        <option value="Electric">Electric</option>
      </select>

      <select value={sortType} onChange={(e) => setSortType(e.target.value)}>
        <option value="">Sort by</option>
        <option value="price-low-high">Price: Low to High</option>
        <option value="price-high-low">Price: High to Low</option>
      </select>

      <button onClick={handleFilter}>Apply Filters</button>
    </div>
  );
};

export default Filters;
