/*
 
Desafío 2 de 4: Eliminar un artículo del carrito de compras 
Este carrito de compras tiene un botón ”+” que funciona, pero el botón ”–” no hace nada.
Debes agregarle un controlador de evento para que al presionarlo disminuya 
el count del producto correspondiente. Si presionas ”–” cuando el conteo es 1, 
el producto debería eliminarse automáticamente del carrito. Asegúrate de que nunca muestre 0.
 */

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

export default function DesafioDos() {
  const [products, setProducts] = useState(initialProducts);

  function handleIncreaseClick(productId) {
    setProducts(
      products.map((product) => {
        if (product.id === productId) {
          return {
            ...product,
            count: product.count + 1,
          };
        } else {
          return product;
        }
      })
    );
  }

  function handleDecrementClick(id) {
    /*
      con map transformamos cada elemento del array y cada elemento transformado se guarda en
      un nuevo array.
    */
    let listaUpdated = products.map((product) => {
      if (product.id === id) {
        return { ...product, count: product.count - 1 };
      } else {
        return product;
      }
    });
    // ahora vamos a reasignarle el valor al array.
    // * listUpdated cada uno de sus elemento pasa por una condicion si la cumple se guarda
    // en un nuevo array.
    // el producto.count es mayor a cero entonces lo guarada de lo contrario no lo guarada.
    // por lo que si es -1 o -2 no los guardara.
    listaUpdated = listaUpdated.filter((product) => product.count > 0);
    // mandamos la lista actualizada.
    setProducts(listaUpdated);
  }

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          {product.name} (<b>{product.count}</b>)
          <button
            onClick={() => {
              handleIncreaseClick(product.id);
            }}
          >
            +
          </button>
          <button onClick={() => handleDecrementClick(product.id)}>–</button>
        </li>
      ))}
    </ul>
  );
}
