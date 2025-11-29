import { useState } from "react";
import { sculptureList } from "../data";

export default function App() {
  return (
    <>
      <h2>El estado es aislado y privado</h2>
      <Galeria />
      <Galeria />
    </>
  );
}

function Galeria() {
  const [index, setIndex] = useState(0);
  const [showMore, setshowMore] = useState(false);

  function handleClick() {
    setIndex(index + 1);
  }

  function handleShowClick() {
    setshowMore(!showMore);
  }

  let sculpture = sculptureList[index];

  return (
    <>
      <section>
        <div>
          <button onClick={handleClick}>Siguiente</button>
          <br />
          <p>
            ({index + 1} de {sculptureList.length})
          </p>
          <button onClick={handleShowClick}>
            {showMore ? "Ocultar" : "Mostrar"} Detalles
          </button>
        </div>
        {showMore && <p>{sculpture.description}</p>}
        <br />
        <img src={sculpture.url} alt={sculpture.alt} />
      </section>
    </>
  );
}
