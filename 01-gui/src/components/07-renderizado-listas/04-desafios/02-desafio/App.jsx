/*
Listas anidadas en un componente 
¡Haz una lista de recetas desde este array! Por cada receta en el array, 
coloca su nombre en un <h2> y lista sus ingredientes en un <ul>
*/

import { Fragment } from "react";
import { recipes } from "./recipes";

export default function App() {
  const recetas = recipes.map((r, id) => (
    <Fragment key={id}>
      <Recipe recipe={r} />
    </Fragment>
  ));

  return (
    <div>
      <h1>Recetas</h1>
      <ul>{recetas}</ul>
    </div>
  );
}

function Recipe({ recipe }) {
  const ingredientes = recipe.ingredients.map((ingrediente, id) => (
    <li key={id}>{ingrediente}</li>
  ));

  return (
    <>
      <div key={recipe.id}>
        <h2>{recipe.name}</h2>
        <ol>
          <p>Ingredientes: </p>
          {ingredientes}
        </ol>
      </div>
    </>
  );
}
