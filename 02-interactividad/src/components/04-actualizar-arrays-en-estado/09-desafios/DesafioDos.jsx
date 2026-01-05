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
          <button>–</button>
        </li>
      ))}
    </ul>
  );
}
