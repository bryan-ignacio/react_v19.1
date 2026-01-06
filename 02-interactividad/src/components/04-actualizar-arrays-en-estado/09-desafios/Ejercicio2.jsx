import { useState } from "react";

const initialProducts = [
  {
    id: 0,
    name: "Baklava",
    count: 1,
  },
  {
    id: 1,
    name: "Queso",
    count: 5,
  },
  {
    id: 2,
    name: "Espaguetis",
    count: 2,
  },
];

export default function Ejercicio2() {
  const [productos, setProductos] = useState(initialProducts);
  function handleIncrementClick(producto) {
    let listaIncrementada = productos.map((elemento) => {
      if (elemento.id == producto.id) {
        return { ...elemento, count: elemento.count + 1 };
      } else {
        return elemento;
      }
    });
    setProductos(listaIncrementada);
  }

  function handleDecrementClick(producto) {
    let listaDecrementada = productos.map((elemento) => {
      if (producto.id === elemento.id) {
        return { ...elemento, count: elemento.count - 1 };
      } else {
        return elemento;
      }
    });

    listaDecrementada = listaDecrementada.filter(
      (elemento) => elemento.count > 0
    );

    setProductos(listaDecrementada);
  }

  return (
    <>
      <h3>Carrito De Compras</h3>
      <ul>
        {productos.map((producto) => {
          return (
            <li key={producto.id}>
              {producto.name} ( {producto.count} ){" "}
              <button onClick={() => handleIncrementClick(producto)}>+</button>{" "}
              <button onClick={() => handleDecrementClick(producto)}>-</button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
