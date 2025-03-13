import React, { useContext, useState } from "react";
import { CarContext } from "../context/CarContext";
import "./AdminPanel.css"; // ✅ Add styling

const AdminPanel = () => {
  const { cars, addCar, deleteCar, updateCar } = useContext(CarContext);
  const [newCar, setNewCar] = useState({ brand: "", model: "", year: "", fuel: "", price: "", image: "" });

  const handleChange = (e) => {
    setNewCar({ ...newCar, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newCar.brand && newCar.model) {
      addCar(newCar);
      setNewCar({ brand: "", model: "", year: "", fuel: "", price: "", image: "" });
    }
  };

  return (
    <div className="admin-panel">
      <h2>Admin Panel - Manage Cars</h2>

      {/* Add Car Form */}
      <form onSubmit={handleSubmit} className="admin-form">
        <input type="text" name="brand" placeholder="Brand" value={newCar.brand} onChange={handleChange} required />
        <input type="text" name="model" placeholder="Model" value={newCar.model} onChange={handleChange} required />
        <input type="number" name="year" placeholder="Year" value={newCar.year} onChange={handleChange} required />
        <input type="text" name="fuel" placeholder="Fuel Type" value={newCar.fuel} onChange={handleChange} required />
        <input type="number" name="price" placeholder="Price" value={newCar.price} onChange={handleChange} required />
        <input type="text" name="image" placeholder="Image URL" value={newCar.image} onChange={handleChange} required />
        <button type="submit">Add Car</button>
      </form>

      {/* List of Cars */}
      <div className="car-list">
        {cars.map((car) => (
          <div key={car.id} className="car-card">
            <img src={car.image} alt={car.model} />
            <h3>{car.brand} {car.model}</h3>
            <p>Year: {car.year} | Fuel: {car.fuel}</p>
            <p>Price: ${car.price}</p>
            <button onClick={() => deleteCar(car.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminPanel;
