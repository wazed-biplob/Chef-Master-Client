/* eslint-disable no-unused-vars */
import React from "react";
import "./Home.css";
import Header from "../../Shared/Header";
import { Button } from "react-bootstrap";
const Home = () => {
  return (
    <div className="banner d-flex align-items-center">
      <div className="banner-text d-flex flex-column w-50 text-white gap-4 ms-4">
        <h2>
          <span style={{ color: "lightsalmon" }}>Chef</span> Master
        </h2>
        <h4>
          Experience culinary excellence, Discover the art of flavor, Indulge in
          the exquisite tastes, Savor every bite with creations, Elevate your
          dining experience with english cuisine!
        </h4>
        <Button variant="secondary">Order Now</Button>{" "}
      </div>
    </div>
  );
};

export default Home;
