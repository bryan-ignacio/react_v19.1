/*
Insertar Elemento en un Array.
- para esto se utiliza la sentencia de propagacion y el metodo slice()
    slice() permite quitar un pedazo del array. 
    Para insertar un elemento primero vamos a cortar hasta el punto donde queremos insertar el nuevo elemento
    luego insertamos el elemento nuevo luego colocamos lo que sigue del array original.
*/

import { useState } from "react";

//En este ejemplo el boton Insertar siempre inserta en el indice 1.
export default function App() {
  const initialArray = [
    "Marta Colvin Andrade",
    "Lamidi Olonade Fakeye",
    "Louise Nevelson",
  ];

  const [array, setArray] = useState(initialArray);
  const [newElement, setNewElement] = useState("");

  function handleChange(e) {
    setNewElement(e.target.value);
  }

  function handleClick() {
    let start = array.slice(0, 1);
    let end = array.slice(1, array.length);
    let newArray = [...start, newElement, ...end];
    setArray(newArray);
  }

  return (
    <>
      <h2>Escultores Inspiradores</h2>
      <input
        placeholder="agrega un escultor"
        type="text"
        onChange={handleChange}
      />{" "}
      <button onClick={handleClick}>Insertar</button>
      <ul>
        {array.map((element) => {
          return <li>{element}</li>;
        })}
      </ul>
    </>
  );
}
