import React from "react";
import "./Subscribe.css";
const Subscribe = () => {
  return (
    <div className="subscribe d-flex flex-row">
      <div className="blank"></div>
      <div className="overlay p-4 d-flex flex-column justify-content-center">
        <h1>Food and Pastas in America</h1>
        <p>
          In recent years, American cuisine has also seen a resurgence in
          artisanal and locally sourced ingredients. Farm-to-table restaurants
          are becoming increasingly popular, with chefs showcasing the best of
          regional produce and meats. This focus on quality and sustainability
          has helped elevate American cuisine to new heights, making it a truly
          unique and exciting culinary scene. American cuisine is a melting pot
          of various cultures, blending flavors and techniques from all over the
          world. From fast food to fine dining, American cuisine is a diverse
          and constantly evolving culinary scene that reflects the country's
          history, geography, and cultural influences. One of the most iconic
          American dishes is the hamburger. It's hard to find a more ubiquitous
          fast food item than a burger, with its juicy beef patty, melted
          cheese, and various toppings like lettuce, tomato, pickles, and
          onions, all sandwiched between a fluffy bun. Burgers have been a
          staple of American cuisine for over a century, and they continue to
          evolve with new variations and creative twists.
        </p>
        <button className="btn btn-secondary w-50">Subscribe</button>
      </div>
    </div>
  );
};

export default Subscribe;
