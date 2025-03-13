import React, { useContext } from "react";
import { CarContext } from "../context/CarContext";
import "./Search.css";

const Search = () => {
  const { search, setSearch } = useContext(CarContext);

  return (
    <input
      type="text"
      placeholder="Search cars..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="search-bar"
    />
  );
};

export default Search;
