import React from "react";

const PriceDropdown = ({ handleChange }) => {
  return (
    <select
      style={{ width: "80%" }}
      className="form-select price"
      aria-label="Default select example"
      required
      name="price"
      onChange={(e) => handleChange(e)}
    >
      <option defaultValue="All">All</option>
      <option value="0-10000">0-10000</option>
      <option value="10000-20000">10000-20000</option>
      <option value="20000-30000">20000-30000</option>
      <option value="30000-100000">30000-100000</option>
    </select>
  );
};

export default PriceDropdown;
