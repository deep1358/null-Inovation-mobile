import React from "react";

const BrandDropdown = ({ handleChange }) => {
  return (
    <select
      style={{ width: "80%" }}
      className="form-select brand"
      aria-label="Default select example"
      required
      name="mobileBrand"
      onChange={(e) => handleChange(e)}
    >
      <option defaultValue="All">All</option>
      <option value="Samsung">Samsung</option>
      <option value="Xiomi">Xiomi</option>
      <option value="IPhone">Iphone</option>
      <option value="Oneplus">Oneplus</option>
      <option value="Vivo">Vivo</option>
    </select>
  );
};

export default BrandDropdown;
