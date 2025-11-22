/*
Este componente RecipeList contiene dos llamadas map anidadas. 
Para simplificarlo, extrae un componente Recipe de el que aceptará las props id, name, y ingredients. 
¿Dónde colocarías la key exterior y por qué?
 */
import { recipes } from "./recipes";

export default function App() {
  return (
    <>
      <h2>Desafio 3</h2>
      <RecipeList />
    </>
  );
}

function RecipeList() {
  return (
    <div>
      <h1>Recetas</h1>
      {recipes.map((recipe) => (
        <Recipe
          id={recipe.id}
          name={recipe.name}
          ingredients={recipe.ingredients}
          key={recipe.id}
        />
      ))}
    </div>
  );
}

function Recipe({ id, name, ingredients }) {
  const nodosJSX = ingredients.map((ingrediente, id) => (
    <li key={id}>{ingrediente}</li>
  ));
  return (
    <>
      <div key={id}>
        <h2>{name}</h2>
        <ul>{nodosJSX}</ul>
      </div>
    </>
  );
}
