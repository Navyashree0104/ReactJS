import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CarContext } from "../context/CarContext";
import LazyImage from "../components/LazyImage";
import SearchBar from "../components/SearchBar";
import "./CarCatalogue.css";

const CarCatalogue = () => {
  const { cars } = useContext(CarContext);
  const [searchQuery, setSearchQuery] = useState("");

  // Search handler
  const handleSearch = (query) => {
    setSearchQuery(query.toLowerCase());
  };

  // Filter cars based on search input
  const filteredCars = cars?.filter((car) =>
    `${car.brand} ${car.model}`.toLowerCase().includes(searchQuery)
  );

  return (
    <div className="car-catalogue">
      {/* Search Bar Component */}
      <SearchBar onSearch={handleSearch} />

      {filteredCars?.length > 0 ? (
        filteredCars.map((car) => (
          <div key={car.id} className="car-card">
            <Link to={`/car/${car.id}`} className="car-link">
              {/* Lazy Loading Images */}
              <LazyImage src={car.image} alt={car.model} />
              <h3>{car.brand} {car.model}</h3>
              <p>Year: {car.year}</p>
              <p>Fuel: {car.fuel}</p>
              <p>Price: ${car.price}</p>
            </Link>
          </div>
        ))
      ) : (
        <p className="no-cars">No cars found.</p>
      )}
    </div>
  );
};

export default CarCatalogue;
