/* eslint-disable no-unused-vars */
import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const ChefCard = ({ chef }) => {
  console.log(chef);
  const { name, pictureURL, yearsOfExperience, totalLikes, numberOfRecipes } =
    chef;
  return (
    <Card>
      <Card.Img style={{ height: "300px" }} variant="top" src={pictureURL} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          Experience : {yearsOfExperience}, Likes : {totalLikes}, Recipes :{" "}
          {numberOfRecipes}
        </Card.Text>
        <Link to={`/chef/${chef.id}`}>
          <Button variant="warning">View Recipe</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default ChefCard;
