import React from "react";

export default function Recipe(props) {
  const { name, cookingTime, instructions, servings } = props;

  return (
    <div>
      <div>
        <h3>{name}</h3>
        <div>
          <button>Edit</button>
          <button>Delete</button>
        </div>
      </div>

      <div>
        <span>Cook Time:</span>
        <span>{cookingTime}</span>
      </div>
      <div>
        <span>Servings:</span>
        <span>{servings}</span>
      </div>
      <div>
        <span>Instructions:</span>
        <div>{instructions}</div>
      </div>
    </div>
  );
}
