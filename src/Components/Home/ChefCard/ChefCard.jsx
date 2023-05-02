/* eslint-disable no-unused-vars */
import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { HiThumbUp } from "react-icons/hi";
import { GiCookingPot } from "react-icons/gi";
import { GoCalendar } from "react-icons/go";
import { BsFileTextFill } from "react-icons/bs";

const ChefCard = ({ chef }) => {
  console.log(chef);
  const { name, pictureURL, yearsOfExperience, totalLikes, numberOfRecipes } =
    chef;
  return (
    <Card>
      <Card.Img style={{ height: "300px" }} variant="top" src={pictureURL} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text className="d-flex gap-4 justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <GoCalendar
              style={{
                fontSize: "18px",
                color: "lightsalmon",
                marginRight: "8px",
              }}
            />
            Experience (Y) : {yearsOfExperience}
          </div>
          <div>
            <HiThumbUp
              style={{
                fontSize: "22px",
                color: "lightsalmon",
                marginRight: "8px",
              }}
            />
            {totalLikes}
          </div>
          <div>
            <GiCookingPot
              style={{
                fontSize: "28px",
                color: "lightsalmon",
                marginRight: "8px",
              }}
            />
            Recipes :{numberOfRecipes}
          </div>
        </Card.Text>
        <Link to={`/chef/${chef.id}`}>
          <Button variant="warning">
            <GiCookingPot
              style={{ fontSize: "26px", color: "white", marginRight: "8px" }}
            />
            View Recipe
          </Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default ChefCard;
