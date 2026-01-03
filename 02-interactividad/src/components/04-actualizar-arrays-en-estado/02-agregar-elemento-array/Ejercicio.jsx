import { useState } from "react";

export default function Ejercicio() {
  return (
    <>
      <Agregar />
    </>
  );
}

let nextId = 0;

function Agregar() {
  const [element, setElement] = useState("");
  const [artist, setArtist] = useState([]);

  function handleChange(e) {
    setElement(e.target.value);
  }

  function handleClick() {
    setArtist([...artist, { id: nextId++, name: element }]);
  }

  return (
    <>
      <h2>Escultores Inspiradores: </h2>
      <input type="text" onChange={handleChange} />
      <button onClick={handleClick}>Agregar</button>
      <br />
      <ul>
        {artist.map((a) => (
          <li>{a.name}</li>
        ))}
      </ul>
    </>
  );
}
