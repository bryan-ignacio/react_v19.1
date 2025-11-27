import { useState } from "react";
import { sculptureList } from "../data";

export default function App() {
  return (
    <>
      <Galeria />
    </>
  );
}

function Galeria() {
  /* 1. declaramos nuestro estado.
   * index: la variable de estado.
   * setIndex: funcion que actualiza la variable de estado y le indica a React que renderice el componente.
   * 0: es el valor inicial de la variable de estado.
   */
  const [index, setIndex] = useState(0);

  function handleClick() {
    setIndex(index + 1);
  }

  let sculture = sculptureList[index];

  return (
    <>
      <section>
        <div>
          <button onClick={handleClick}>Siguiente</button>
        </div>
        <div
          style={{
            margin: "20px",
            width: "450px",
            padding: "20px",
            backgroundColor: "#778da9",
          }}
        >
          <h2>{sculture.name}</h2>
          <p>
            {index + 1} de {sculptureList.length}
          </p>
          <img src={sculture.url} alt={sculture.alt} />
          <p>{sculture.description}</p>
        </div>
      </section>
    </>
  );
}
