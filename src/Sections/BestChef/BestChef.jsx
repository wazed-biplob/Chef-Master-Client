import React from "react";
import { Button, Card, ListGroup } from "react-bootstrap";
import { BsFileTextFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { GiCookingPot } from "react-icons/gi";
import { GoCalendar, GoInfo } from "react-icons/go";
import { HiThumbUp } from "react-icons/hi";
import "./BestChef.css";

const BestChef = ({ data }) => {
  const arr = [];
  data.map((d) => arr.push(d.totalLikes));
  const found = Math.max(...arr);

  const chef = data.find((d) => d.totalLikes === found);
  const {
    bio,
    name,
    pictureURL,
    yearsOfExperience,
    totalLikes,
    numberOfRecipes,
  } = chef;

  return (
    <>
      <h1 className="text-center mt-3" style={{ color: "lightsalmon" }}>
        Chef of the Year
      </h1>
      <div className="best-chef bg-light d-flex flex-row justify-content-center gap-4 m-4 p-4 border">
        <div className="d-flex align-items-center">
          <div className="card-body">
            <h3 className="card-title">
              <FaUser className="me-4 text-warning" />
              {name}
            </h3>
            <hr />
            <p className="card-text">
              <BsFileTextFill
                style={{
                  fontSize: "26px",
                  marginRight: "8px",
                  color: "lightcoral",
                }}
              />{" "}
              Short Bio : {bio}
            </p>
            <hr />
            <p className="card-text">
              <HiThumbUp
                className="text-info"
                style={{
                  fontSize: "26px",
                  marginRight: "8px",
                }}
              />{" "}
              {totalLikes}
            </p>
            <hr />
            <p className="card-text">
              <GiCookingPot
                className="text-danger"
                style={{ fontSize: "26px", marginRight: "8px" }}
              />
              Number of Recipes : {numberOfRecipes}
            </p>
            <hr />
            <p className="card-text">
              <GoCalendar
                style={{
                  fontSize: "26px",
                  marginRight: "8px",
                  color: "lightpink",
                }}
              />{" "}
              Years of Experience : {yearsOfExperience}
            </p>
            <hr />
            <p className="card-text">
              <GoInfo
                style={{
                  fontSize: "26px",
                  marginRight: "8px",
                  color: "lightgrey",
                }}
              />{" "}
              Best Chef is evaluated by the quality of recipe and rating by the
              user.
            </p>
          </div>
        </div>

        <div className="d-flex justify-content-center align-items-center">
          <img
            style={{ width: "400px", height: "400px" }}
            src={pictureURL}
            className=" ps-2"
            alt="image"
          />
        </div>
      </div>
    </>
  );
};

export default BestChef;
