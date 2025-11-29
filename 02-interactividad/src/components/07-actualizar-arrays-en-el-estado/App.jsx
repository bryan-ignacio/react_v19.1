import { useState } from "react";
import { sculptureList } from "../02-el-estado/data";

export default function App() {
  return (
    <>
      <Gallery />
    </>
  );
}

function Gallery() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  function handleNextClick() {
    console.log("siguiente: ", index);
    setIndex(index + 1);
  }

  function handleAnteriorClick() {
    console.log("anterior: ", index);
    setIndex(index - 1);
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  let sculpture = sculptureList[index];

  return (
    <>
      <button onClick={handleNextClick}>Siguiente</button>
      <br />
      <button onClick={handleAnteriorClick}>Anterior</button>
      <h2>
        <i>{sculpture.name} </i>
        por {sculpture.artist}
      </h2>
      <h3>
        ({index + 1} de {sculptureList.length})
      </h3>
      <button onClick={handleMoreClick}>
        {showMore ? "Ocultar" : "Mostrar"} detalles
      </button>
      <br />

      {showMore && <p>{sculpture.description}</p>}
      <img src={sculpture.url} alt={sculpture.alt} />
    </>
  );
}
