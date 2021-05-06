import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import ListingPage from "../ListingPage/ListingPage";

const Home = () => {
  const [mobiles, setMobiles] = useState(
    JSON.parse(localStorage.getItem("mobiles") || "[]")
  );

  const priceRef = useRef(null);
  const brandRef = useRef(null);

  const handleChange = (e) => {
    var current_price = priceRef.current.value;
    var current_brand = brandRef.current.value;

    if (current_price === "All" && current_brand === "All")
      setMobiles(JSON.parse(localStorage.getItem("mobiles")));
    else if (current_price === "All" && current_brand !== "All") {
      setMobiles(
        JSON.parse(localStorage.getItem("mobiles")).filter(
          (mobile) => mobile.mobileBrand === current_brand
        )
      );
    } else if (current_price !== "All" && current_brand === "All") {
      var price = current_price.split("-");
      setMobiles(
        JSON.parse(localStorage.getItem("mobiles")).filter(
          (mobile) =>
            Number(mobile.price) > Number(price[0]) &&
            Number(mobile.price) <= Number(price[1])
        )
      );
    } else {
      var price1 = current_price.split("-");
      setMobiles(
        JSON.parse(localStorage.getItem("mobiles")).filter(
          (mobile) =>
            Number(mobile.price) > Number(price1[0]) &&
            Number(mobile.price) <= Number(price1[1]) &&
            mobile.mobileBrand === current_brand
        )
      );
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <label className="form-label">Filter by Brand:</label>
          <select
            ref={brandRef}
            style={{ width: "80%" }}
            className="form-select"
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
        </div>
        <div className="col">
          <label className="form-label">Filter by Price:</label>
          <select
            ref={priceRef}
            style={{ width: "80%" }}
            className="form-select"
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
        </div>
      </div>
      <ListingPage mobiles={mobiles} />
      <div className="position-absolute" style={{ top: "2vh", right: "2vw" }}>
        <Link to="/admin">
          <button type="button" className="btn btn-dark">
            Add Mobile
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
