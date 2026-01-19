import { useState } from "react";

const initialItems = [
  { title: "pretzels", id: 0 },
  { title: "crujiente de algas", id: 1 },
  { title: "barra de granola", id: 2 },
];

export default function Menu() {
  const [items, setItems] = useState(initialItems);
  const [name, setName] = useState("");

  // por que este es un elemento duplicado?
  // el objeto almacenado en selectedItem es el mismo que el de la lista items.
  // por lo que se esta duplicando en dos lugares.
  //const [selectedItem, setSelectedItem] = useState(items[0]);

  function handleClick(item) {
    setName(item.title);
  }

  return (
    <>
      <h2>¿Cuál es tu merienda de viaje?</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.title}{" "}
            <button onClick={() => handleClick(item)}>Seleccionar</button>
          </li>
        ))}
      </ul>
      {/* <p>Seleccionaste {selectedItem.title}.</p> */}
      <p>Seleccionaste {name}</p>
    </>
  );
}
