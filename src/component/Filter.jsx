import React, { useState } from "react";

const Filter = ({ onFilterChange }) => {
  const [titleFilter, setTitleFilter] = useState("");
  const [rateFilter, setRateFilter] = useState("");

  const handleTitleChange = (e) => {
    setTitleFilter(e.target.value);
    onFilterChange({ title: e.target.value, rate: rateFilter });
  };

  const handleRateChange = (e) => {
    setRateFilter(e.target.value);
    onFilterChange({ title: titleFilter, rate: e.target.value });
  };

  return (
    <div className="filter">
      <input
        type="text"
        placeholder="Filter by Title"
        value={titleFilter}
        onChange={handleTitleChange}
      />
      <input
        type="number"
        placeholder="Filter by Rating"
        value={rateFilter}
        onChange={handleRateChange}
      />
    </div>
  );
};

export default Filter;
