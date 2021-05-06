import React from "react";

const ListingPage = ({ mobiles }) => {
  return (
    <div className="container">
      {/** Condition for mobiles exist and then render mobiles */}
      {mobiles && (
        <div className="row justify-content-center">
          {mobiles.map((mobile) => (
            <div
              key={`${mobile.mobileName}`}
              className="col-6 col-md-4 card"
              style={{
                margin: "20px",
                width: "22rem",
                boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
              }}
            >
              <div className="card-body">
                <h3 className="card-title">{mobile.mobileName}</h3>
                <p className="card-text">Brand: {mobile.mobileBrand}</p>
                <p className="card-text">Color: {mobile.color}</p>
                <p className="card-text">Price: {mobile.price} $</p>
                <p className="card-text">RAM: {mobile.RAM} GB</p>
                <p className="card-text">ROM: {mobile.ROM} GB</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/** Condition for no mobiles exist or 0 result of filters */}
      {mobiles.length === 0 && (
        <h1
          style={{
            position: "absolute",
            top: "40vh",
            left: "30vw",
            fontSize: "4rem",
          }}
        >
          Add Mobiles to Show
        </h1>
      )}
    </div>
  );
};

export default ListingPage;
