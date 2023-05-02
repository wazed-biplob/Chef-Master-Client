import React, { useState } from "react";
import { Button, Card, ListGroup } from "react-bootstrap";
import toast, { Toaster } from "react-hot-toast";
const ChefRecipeCard = ({ recipe }) => {
  const [favourite, setFavourite] = useState(false);
  const { recipeName, cookingMethod, ingredients, rating } = recipe;
  const handleFavourite = () => {
    toast("Added as Favourite Recipe!");
    setFavourite(true);
  };
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
        <Button
          onClick={handleFavourite}
          variant="warning"
          disabled={favourite}
        >
          My Favourite
        </Button>

        <Toaster />
      </Card>
    </div>
  );
};

export default ChefRecipeCard;
