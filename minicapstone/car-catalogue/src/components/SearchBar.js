import React, { useState } from "react";


const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <input
      type="text"
      className="search-bar"
      placeholder="Search for cars..."
      value={query}
      onChange={handleChange}
    />
  );
};

export default SearchBar;
