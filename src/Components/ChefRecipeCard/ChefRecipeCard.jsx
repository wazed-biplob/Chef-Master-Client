import React from "react";
import { Button, Card, ListGroup } from "react-bootstrap";

const ChefRecipeCard = ({ recipe }) => {
  const { recipeName, cookingMethod, ingredients, rating } = recipe;
  return (
    <div>
      <Card>
        <Card.Header>
          <h4>{recipeName}</h4>
        </Card.Header>
        <ListGroup variant="flush">
          <ListGroup.Item>
            <span>Ingredients</span>
            <hr />
            {ingredients.slice(0, 5).map((i, idx) => (
              <p key={idx}>{i}</p>
            ))}
          </ListGroup.Item>
          <ListGroup.Item>
            <span>Cooking Method</span>
            <hr />
            {cookingMethod.slice(0, 200)}...
          </ListGroup.Item>
          <ListGroup.Item>Rating : {rating}</ListGroup.Item>
        </ListGroup>
        <Button variant="warning">My Favourite</Button>
      </Card>
    </div>
  );
};

export default ChefRecipeCard;
