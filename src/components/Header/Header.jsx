import React from "react";
import house from "../../assets/images/real-estate-house.png";
import "./header.css";

export const Header = () => {
  return (
    <div className="row mx-0 header-container justify-content-lg-center mt-2">
      <div className="col-3 justify-items-sm-start justify-content-center text-center">
        <img className="house-image" src={house} alt="house" />
      </div>
      <div className="col-9 align-items-center d-flex">
           <span className="col-lg-3 col-1 col-sm-2"/> XYZ SYSTEMS LLP
      </div>
    </div>
  );
};
