import { useState } from "react";

const initialItems = [
  { title: "pretzels", id: 0 },
  { title: "crujiente de algas", id: 1 },
  { title: "barra de granola", id: 2 },
];

export default function Menu() {
  const [items, setItems] = useState(initialItems);

  const [idSelected, setIdSelected] = useState(0);

  function handleChange(itemId, e) {
    const itemsUpdated = items.map((item) => {
      if (item.id === itemId) {
        return { ...item, title: e.target.value };
      } else {
        return item;
      }
    });
    setItems(itemsUpdated);
  }

  function handleClick(itemId) {
    setIdSelected(itemId);
  }

  const itemSelected = items.find((item) => item.id === idSelected);

  return (
    <>
      <section>
        <h3>Cual es tu merienda de viaje?</h3>
        <ul>
          {items.map((item) => {
            return (
              <>
                <li key={item.id}>
                  <input
                    type="text"
                    value={item.title}
                    onChange={(e) => handleChange(item.id, e)}
                  />{" "}
                  <button onClick={() => handleClick(item.id)}>
                    Seleccionar
                  </button>
                </li>
                <br />
              </>
            );
          })}
        </ul>
        <p>Seleccionaste {itemSelected.title} </p>
      </section>
    </>
  );
}
