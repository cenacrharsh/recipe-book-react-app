/* COMPONENTS */
import RecipeList from "./RecipeList";

function App() {
  return <RecipeList recipes={sampleRecipes}/>
}

const sampleRecipes = [
  {
    id: 1,
    name: "Plain Chicken",
    servings: 3,
    cookingTime: "1:45",
    instructions:
      "1. Put salt on chicken\n2. Put chicken in oven\n3. Eat Chicken",
  },
  {
    id: 2,
    name: "Plain Pork",
    servings: 5,
    cookingTime: "0:45",
    instructions: "1. Put paprika on pork\n2. Put pork in oven\n3. Eat pork",
  },
];

export default App;
