import { useState } from "react";
import { sculptureList } from "../data.js";

export default function App() {
  return (
    <>
      <Galeria />
    </>
  );
}

function Galeria() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  function handleClick() {
    setIndex(index + 1);
  }

  function handleShowClick() {
    setShowMore(!showMore);
  }

  let escultura = sculptureList[index];

  return (
    <>
      <section>
        <div>
          <button onClick={handleClick}>Siguiente</button>
        </div>
        <div>
          <h2>{escultura.name}</h2>
          <p>
            ({index + 1} de {sculptureList.length})
          </p>
          <div>
            <button onClick={handleShowClick}>
              {showMore ? "Ocultar" : "Mostrar"} Detalles
            </button>
          </div>
          {showMore && <p>{escultura.description}</p>}
          <br />
          <img src={escultura.url} alt={escultura.alt} />
        </div>
      </section>
    </>
  );
}
