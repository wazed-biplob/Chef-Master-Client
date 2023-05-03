/* eslint-disable no-unused-vars */
import React from "react";
import { useLoaderData } from "react-router-dom";
import Header from "../../Shared/Navbar";
import ChefRecipe from "../../Sections/ChefRecipe/ChefRecipe";
import { FaUser } from "react-icons/fa";
import { HiThumbUp } from "react-icons/hi";
import { GiCookingPot } from "react-icons/gi";
import { GoCalendar } from "react-icons/go";
import { BsFileTextFill } from "react-icons/bs";

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
          <div className="col-md-4 d-flex align-items-center">
            <img
              src={pictureURL}
              className="img-fluid rounded-start ps-2"
              alt="image"
            />
          </div>
          <div className="col-md-8 d-flex align-items-center">
            <div className="card-body">
              <h3 className="card-title">
                <FaUser className="me-4" />
                {name}
              </h3>
              <hr />
              <p className="card-text">
                <BsFileTextFill
                  style={{ fontSize: "26px", marginRight: "8px" }}
                />{" "}
                Short Bio : {bio}
              </p>
              <hr />
              <p className="card-text">
                <HiThumbUp style={{ fontSize: "26px", marginRight: "8px" }} />{" "}
                {totalLikes}
              </p>
              <hr />
              <p className="card-text">
                <GiCookingPot
                  style={{ fontSize: "26px", marginRight: "8px" }}
                />
                Number of Recipes : {numberOfRecipes}
              </p>
              <hr />
              <p className="card-text">
                <GoCalendar style={{ fontSize: "26px", marginRight: "8px" }} />{" "}
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
