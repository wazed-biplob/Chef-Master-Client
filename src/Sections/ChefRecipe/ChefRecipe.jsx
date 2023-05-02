import React from "react";
import ChefRecipeCard from "../../Components/ChefRecipeCard/ChefRecipeCard";
import "./ChefRecipe.css";
const ChefRecipe = ({ chefData }) => {
  const { recipes } = chefData;

  return (
    <>
      <div className="chef-recipe">
        {recipes.map((recipe, idx) => (
          <ChefRecipeCard key={idx} recipe={recipe} />
        ))}
      </div>
    </>
  );
};

export default ChefRecipe;
