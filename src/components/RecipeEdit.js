import React from "react";

export default function RecipeEdit() {
  return (
    <div className="recipe-edit">
      <div>
        <button>&times;</button>
      </div>
      <div className="">
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" />

        <label htmlFor="cookTime">Cook Time</label>
        <input type="text" name="cookTime" id="name" />

        <label htmlFor="servings">Servings</label>
        <input type="number" name="servings" min="1" id="servings" />

        <label htmlFor="instructions">Instructions</label>
        <textarea name="instructions" id="instructions" />
      </div>
      <br />
      <label>Ingredients</label>
      <div>
        <div>Name</div>
        <div>Amount</div>
        <div></div>
      </div>
      <div>
        <button>Add Ingredients</button>
      </div>
    </div>
  );
}
