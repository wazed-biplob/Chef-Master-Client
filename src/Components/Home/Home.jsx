/* eslint-disable no-unused-vars */
import React from "react";
import "./Home.css";
import Header from "../../Shared/Navbar";
import { Button } from "react-bootstrap";
import Chef from "../../Sections/Chef/Chef";
import { useLoaderData } from "react-router-dom";
import LazyLoad from "react-lazy-load";
import BestChef from "../../Sections/BestChef/BestChef";
const Home = () => {
  const data = useLoaderData();
  return (
    <>
      <div className="banner">
        <Header />
        <LazyLoad>
          <div className="banner-text d-flex flex-column w-50 text-white gap-4 ms-4">
            <h2>
              Discover the art of
              <span style={{ color: "lightsalmon" }}> flavour</span>
            </h2>
            <h5>
              Experience culinary excellence, Indulge in the exquisite tastes,
              Savor every bite with creations, Elevate your dining experience
              with english cuisine!
            </h5>
            <Button className="w-50" variant="secondary">
              Order Now
            </Button>
          </div>
        </LazyLoad>
      </div>
      <Chef data={data} />
      <BestChef data={data} />
    </>
  );
};

export default Home;
