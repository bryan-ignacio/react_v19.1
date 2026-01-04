import { useState } from "react";

const initialArtists = [
  { id: 0, name: "Marta Colvin Andrade" },
  { id: 1, name: "Lamidi Olonade Fakeye" },
  { id: 2, name: "Louise Nevelson" },
];

let nextId = 3;

export default function Ejercicio() {
  const [elemento, setElemento] = useState("");
  const [escultores, setEscultores] = useState(initialArtists);

  function handleChange(e) {
    setElemento(e.target.value);
  }

  function handleClick() {
    let start = escultores.slice(0, 1);
    let end = escultores.slice(1, escultores.length);

    let escultoresUpdated = [
      ...start,
      { id: nextId++, name: elemento },
      ...end,
    ];
    setEscultores(escultoresUpdated);
  }

  return (
    <>
      <h3>Escultores Inspiradores</h3>
      <input
        type="text"
        placeholder="insertar escultor"
        onChange={handleChange}
      />{" "}
      <button onClick={handleClick}>Insertar</button>
      <ul>
        {escultores.map((artista) => {
          return (
            <li key={artista.id}>
              {artista.id} {artista.name}
            </li>
          );
        })}
      </ul>
    </>
  );
}
