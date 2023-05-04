import React from "react";
import "./Subscribe.css";
const Subscribe = () => {
  return (
    <div className="subscribe d-flex flex-row">
      <div className="blank"></div>
      <div className="overlay p-3 d-flex flex-column justify-content-center">
        <h1>Food and Pastas in America</h1>
        <p>
          In recent years, American cuisine has also seen a resurgence in
          artisanal and locally sourced ingredients. Farm-to-table restaurants
          are becoming increasingly popular, with chefs showcasing the best of
          regional produce and meats. This focus on quality and sustainability
          has helped elevate American cuisine to new heights, making it a truly
          unique and exciting culinary scene. American cuisine is a melting pot
          of various cultures, blending flavors and techniques from all over the
          world.
        </p>
        <button className="btn btn-secondary w-50">Subscribe</button>
      </div>
    </div>
  );
};

export default Subscribe;
