import React, { useState } from "react";

/* RANDOM ID */
import { v4 as uuidv4 } from "uuid";

/* COMPONENTS */
import RecipeList from "./RecipeList";

/* STYLING */
import "../css/app.css";

/* CREATING CONTEXT */
export const RecipeContext = React.createContext();

function App() {
  const [recipes, setRecipes] = useState(sampleRecipes);

  /* CREATING VALUE TO PASS TO CONTEXT */
  const recipeContextValue = {
    handleRecipeAdd,
    handleRecipeDelete,
  };

  /* FUNCTION TO HANDLE ADD RECIPE BUTTON */

  function handleRecipeAdd() {
    const newRecipe = {
      id: uuidv4(),
      name: "New",
      servings: 1,
      cookTime: "1:00",
      instructions: "Instr",
      ingredients: [
        {
          id: uuidv4(),
          name: "Name",
          amount: "1 Tbs",
        },
      ],
    };

    /* ADDING NEW RECIPE TO EXISTING LIST OF RECIPES */
    setRecipes([...recipes, newRecipe]);
  }

  /* FUNCTION TO HANDLE DELETE BUTTON */

  function handleRecipeDelete(id) {
    setRecipes(recipes.filter((recipe) => recipe.id !== id));
  }

  return (
    <RecipeContext.Provider value={recipeContextValue}>
      <RecipeList recipes={recipes} />
    </RecipeContext.Provider>
  );
}

const sampleRecipes = [
  {
    id: 1,
    name: "Plain Chicken",
    servings: 3,
    cookTime: "1:45",
    instructions:
      "1. Put salt on chicken\n2. Put chicken in oven\n3. Eat Chicken",
    ingredients: [
      {
        id: 1,
        name: "Chicken",
        amount: "2 Pounds",
      },
      {
        id: 2,
        name: "Salt",
        amount: "1 Tbs",
      },
    ],
  },
  {
    id: 2,
    name: "Plain Pork",
    servings: 5,
    cookTime: "0:45",
    instructions: "1. Put paprika on pork\n2. Put pork in oven\n3. Eat pork",
    ingredients: [
      {
        id: 1,
        name: "Pork",
        amount: "3 Pounds",
      },
      {
        id: 2,
        name: "Paprika",
        amount: "2 Tbs",
      },
    ],
  },
];

export default App;
