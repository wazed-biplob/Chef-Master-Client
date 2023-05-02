import React from "react";
import { useLoaderData } from "react-router-dom";
import Header from "../../Shared/Header";
import ChefRecipe from "../../Sections/ChefRecipe/ChefRecipe";

const ChefRecipes = () => {
  const chefData = useLoaderData();
  const {
    name,
    pictureURL,
    yearsOfExperience,
    totalLikes,
    numberOfRecipes,
    bio,
    recipes,
  } = chefData;
  return (
    <div>
      <Header />
      <div className="card mb-3 m-2">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={pictureURL}
              className="img-fluid rounded-start"
              alt="image"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h3 className="card-title">{name}</h3>
              <hr />
              <p className="card-text">Short Bio : {bio}</p>
              <hr />
              <p className="card-text">Likes : {totalLikes}</p>
              <hr />
              <p className="card-text">Number of Recipes : {numberOfRecipes}</p>
              <hr />
              <p className="card-text">
                Years of Experience : {yearsOfExperience}
              </p>
            </div>
          </div>
        </div>
      </div>
      <ChefRecipe chefData={chefData} />
    </div>
  );
};

export default ChefRecipes;
