import React, { useContext, useState } from "react";
import { CarContext } from "../context/CarContext";

const Admin = () => {
  const { cars, addCar, editCar, deleteCar } = useContext(CarContext);
  const [newCar, setNewCar] = useState({ brand: "", model: "", year: "", fuel: "", price: "", image: "" });

  const handleChange = (e) => {
    setNewCar({ ...newCar, [e.target.name]: e.target.value });
  };

  const handleAddCar = () => {
    addCar(newCar);
    setNewCar({ brand: "", model: "", year: "", fuel: "", price: "", image: "" });
  };

  return (
    <div className="admin-panel">
      <h2>Admin Panel - Manage Cars</h2>
      
      {/* Add Car Form */}
      <div className="add-car-form">
        <input type="text" name="brand" placeholder="Brand" value={newCar.brand} onChange={handleChange} />
        <input type="text" name="model" placeholder="Model" value={newCar.model} onChange={handleChange} />
        <input type="number" name="year" placeholder="Year" value={newCar.year} onChange={handleChange} />
        <input type="text" name="fuel" placeholder="Fuel Type" value={newCar.fuel} onChange={handleChange} />
        <input type="number" name="price" placeholder="Price" value={newCar.price} onChange={handleChange} />
        <input type="text" name="image" placeholder="Image URL" value={newCar.image} onChange={handleChange} />
        <button onClick={handleAddCar}>Add Car</button>
      </div>

      {/* Cars List */}
      <div className="car-list">
        {cars.map((car) => (
          <div key={car.id} className="car-card">
            <img src={car.image} alt={car.model} />
            <h3>{car.brand} {car.model}</h3>
            <p>Year: {car.year}</p>
            <p>Fuel: {car.fuel}</p>
            <p>Price: ${car.price}</p>
            <button onClick={() => editCar(car.id)}>Edit</button>
            <button onClick={() => deleteCar(car.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Admin;
