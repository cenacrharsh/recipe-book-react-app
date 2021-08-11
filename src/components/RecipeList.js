import React, { useContext } from "react";

/* COMPONENTS */
import Recipe from "./Recipe";

/* IMPORTING CONTEXT */
import { RecipeContext } from "./App";

export default function RecipeList({ recipes }) {
  /* GETTING VALUE FROM CONTEXT */
  const { handleRecipeAdd } = useContext(RecipeContext);

  return (
    <div className="recipe-list">
      <div>
        {recipes.map((recipe) => {
          return <Recipe key={recipe.id} {...recipe} />;
        })}
      </div>
      <div className="recipe-list__add-recipe-btn-container">
        <button className="btn btn--primary" onClick={handleRecipeAdd}>
          Add Recipe
        </button>
      </div>
    </div>
  );
}
