import { useState } from "react";
/**
 * Para agregar un elemento sin mutar el array se utiliza [...]
 */

export default function App() {
  return (
    <>
      <h2>Agregar elemento a un Array</h2>
      <List />
    </>
  );
}

let nextId = 0;

function List() {
  const [name, setName] = useState("");

  const [artists, setArtists] = useState([]);

  return (
    <>
      <h3>Escultores inspiradores:</h3>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button
        onClick={() => {
          // copiamos los elementos antiguos de array y agregamos el nuevo elemento.
          setArtists([...artists, { id: nextId++, name: name }]);
        }}
      >
        Añadir
      </button>
      <ul>
        {artists.map((artist) => (
          <li key={artist.id}>{artist.name}</li>
        ))}
      </ul>
    </>
  );
}
