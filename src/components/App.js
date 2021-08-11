import React, { useState, useEffect } from "react";

/* RANDOM ID */
import { v4 as uuidv4 } from "uuid";

/* COMPONENTS */
import RecipeList from "./RecipeList";
import RecipeEdit from "./RecipeEdit";

/* STYLING */
import "../css/app.css";

/* CREATING CONTEXT */
export const RecipeContext = React.createContext();

/* CREATING KEY FOR LOCAL STORAGE */
const LOCAL_STORAGE_KEY = "cookingWithReact.recipes";

function App() {
  const [recipes, setRecipes] = useState(sampleRecipes);
  const [selectedRecipeId, setSelectedRecipeId] = useState();

  const selectedRecipe = recipes.find(
    (recipe) => recipe.id === selectedRecipeId
  );

  /* GETTING DATA FROM LOCAL STORAGE */
  useEffect(() => {
    const recipeJSON = localStorage.getItem(LOCAL_STORAGE_KEY);

    if (recipeJSON != null) {
      setRecipes(JSON.parse(recipeJSON));
    }
  }, []);

  /* SETTING DATA TO LOCAL STORAGE */
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(recipes));
  }, [recipes]);

  /* CREATING VALUE TO PASS TO CONTEXT */
  const recipeContextValue = {
    handleRecipeAdd,
    handleRecipeDelete,
    handleRecipeSelect,
    handleRecipeChange,
  };

  /* FUNCTION TO HANDLE CHANGE IN RECIPE */
  function handleRecipeChange(id, recipe) {
    // (id of recipe we want to change, new recipe)

    const newRecipes = [...recipes];
    const index = newRecipes.findIndex((r) => r.id === id);

    // SWAPPING SELECTED RECIPE FROM ORIGINAL ARRAY OF RECIPES
    newRecipes[index] = recipe;

    setRecipes(newRecipes);
  }

  /* FUNCTION TO HANDLE EDIT BUTTON */
  function handleRecipeSelect(id) {
    setSelectedRecipeId(id);
  }

  /* FUNCTION TO HANDLE ADD RECIPE BUTTON */

  function handleRecipeAdd() {
    const newRecipe = {
      id: uuidv4(),
      name: "",
      servings: 1,
      cookTime: "",
      instructions: "",
      ingredients: [
        {
          id: uuidv4(),
          name: "",
          amount: "",
        },
      ],
    };

    // TO MAKE THE RIGHT SIDE OF SCREEN VISIBLE WHEN ADD RECIPE IS CLICKED
    setSelectedRecipeId(newRecipe.id);

    // ADDING NEW RECIPE TO EXISTING LIST OF RECIPES
    setRecipes([...recipes, newRecipe]);
  }

  /* FUNCTION TO HANDLE DELETE BUTTON */

  function handleRecipeDelete(id) {
    // CLEAR OUT setSelectedRecipeId WHEN WE DON'T HAVE A RECIPE THAT CORRESPONDS WITH THAT ID
    if (setSelectedRecipeId != null && setSelectedRecipeId === id) {
      setSelectedRecipeId(undefined);
    }

    setRecipes(recipes.filter((recipe) => recipe.id !== id));
  }

  return (
    <RecipeContext.Provider value={recipeContextValue}>
      <RecipeList recipes={recipes} />

      {selectedRecipe && <RecipeEdit recipe={selectedRecipe} />}
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
