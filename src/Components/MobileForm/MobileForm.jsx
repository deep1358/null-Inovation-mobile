import React, { useState } from "react";
import { Link } from "react-router-dom";

const MobileForm = () => {
  const [form, setForm] = useState({
    mobileName: "",
    mobileBrand: "",
    price: "",
    color: "",
    RAM: "",
    ROM: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    //Logic of LocalStorage
    var mobiles = JSON.parse(localStorage.getItem("mobiles") || "[]");
    mobiles.push(form);
    localStorage.setItem("mobiles", JSON.stringify(mobiles));

    setForm({
      mobileName: "",
      mobileBrand: "",
      color: "",
      price: "",
      RAM: "",
      ROM: "",
    });

    alert("Added Successfully");
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <>
      <h1 className="text-center">Add Mobile</h1>

      {/* Form To Add Mobiles */}
      <form
        onSubmit={handleSubmit}
        style={{
          width: "50vw",
          margin: " 0 auto",
          padding: "30px",
          boxShadow:
            "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
        }}
      >
        <div className="mb-3">
          <label className="form-label">Mobile Name</label>
          <input
            value={form.mobileName}
            name="mobileName"
            onChange={(e) => handleChange(e)}
            type="text"
            className="form-control"
            placeholder="Galaxy 8.0"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Brand</label>
          <select
            className="form-select"
            aria-label="Default select example"
            required
            onChange={(e) => handleChange(e)}
            name="mobileBrand"
          >
            <option selected>Select Brand</option>
            <option value="Samsung">Samsung</option>
            <option value="Xiomi">Xiomi</option>
            <option value="IPhone">Iphone</option>
            <option value="Oneplus">Oneplus</option>
            <option value="Vivo">Vivo</option>
          </select>
        </div>
        <label className="form-label">Price</label>
        <div className="input-group mb-3">
          <span className="input-group-text">$</span>
          <input
            value={form.price}
            name="price"
            onChange={(e) => handleChange(e)}
            type="number"
            className="form-control"
            aria-label="Amount (to the nearest dollar)"
            placeholder="5000"
            required
          />
          <span className="input-group-text">.00</span>
        </div>
        <div className="mb-3">
          <label className="form-label">Color</label>
          <input
            value={form.color}
            name="color"
            onChange={(e) => handleChange(e)}
            type="text"
            className="form-control"
            placeholder="Black"
            required
          />
        </div>
        <label className="form-label">RAM</label>
        <div className="input-group mb-3">
          <input
            value={form.RAM}
            name="RAM"
            onChange={(e) => handleChange(e)}
            type="number"
            className="form-control"
            placeholder="2"
            required
          />
          <span className="input-group-text">GB</span>
        </div>
        <label className="form-label">ROM</label>
        <div className="input-group mb-3">
          <input
            value={form.ROM}
            name="ROM"
            onChange={(e) => handleChange(e)}
            type="number"
            className="form-control"
            placeholder="8"
            required
          />
          <span className="input-group-text">GB</span>
        </div>

        {/* Submit Button */}
        <button type="submit" className="btn btn-success me-md-2">
          Add
        </button>

        {/* Reset Button */}
        <button
          onClick={() =>
            setForm({
              mobileName: "",
              mobileBrand: "",
              color: "",
              price: "",
              RAM: "",
              ROM: "",
            })
          }
          className="btn btn-danger"
          type="reset"
        >
          Reset
        </button>
      </form>

      {/* Show Mobiles Button */}
      <div className="position-absolute" style={{ top: "2vh", right: "2vw" }}>
        <Link to="/">
          <button type="button" className="btn btn-dark">
            Show Mobiles
          </button>
        </Link>
      </div>
    </>
  );
};

export default MobileForm;
