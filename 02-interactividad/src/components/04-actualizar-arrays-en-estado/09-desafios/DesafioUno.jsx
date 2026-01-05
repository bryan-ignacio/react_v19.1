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

/*
Desafío 1 de 4: Actualizar un artículo en el carrito de compras 
Completa la lógica handleIncreaseClick para que al presionar ”+” aumente el número correspondiente:
*/

export default function DesafioUno() {
  const [products, setProducts] = useState(initialProducts);

  function handleIncreaseClick(productId) {
    let productsUpdated = products.map((product) => {
      if (product.id === productId) {
        return { ...product, count: product.count + 1 };
      } else {
        return product;
      }
    });
    setProducts(productsUpdated);
  }

  return (
    <ul>
      {products.map((product) => {
        return (
          <li key={product.id}>
            {product.name} (<b>{product.count}</b>)
            <button
              onClick={() => {
                handleIncreaseClick(product.id);
              }}
            >
              +
            </button>
          </li>
        );
      })}
    </ul>
  );
}
