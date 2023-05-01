/* eslint-disable no-unused-vars */
import React from "react";
import "./Home.css";
import Header from "../../Shared/Header";
import { Button } from "react-bootstrap";
const Home = () => {
  return (
    <>
      <div className="banner">
        <Header />
        <div className="banner-text d-flex flex-column w-50 text-white gap-4 ms-4">
          <h2>
            Discover the art of
            <span style={{ color: "lightsalmon" }}> flavour</span>
          </h2>
          <h5>
            Experience culinary excellence, Indulge in the exquisite tastes,
            Savor every bite with creations, Elevate your dining experience with
            english cuisine!
          </h5>
          <Button className="w-50" variant="secondary">
            Order Now
          </Button>
        </div>
      </div>
    </>
  );
};

export default Home;
