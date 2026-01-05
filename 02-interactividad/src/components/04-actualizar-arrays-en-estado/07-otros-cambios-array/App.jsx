/*

ordenar o invertir un array. sort() y reverse() no se pueden utilizar por que mutan el array original.
para usarlos primero debemos copiar el array original y luego trabajar con esa copia.

Sin embargo, incluso si copias un array, 
no puedes mutar los elementos existentes dentro de éste directamente.
 Esto se debe a que la copia es superficial: el nuevo array contendrá los mismos elementos que el original. 
 Entonces, si modificas un objeto dentro del array copiado, estás mutando el estado existente.
*/

import { useState } from "react";

const initialList = [
  { id: 0, title: "Grandes barrigas" },
  { id: 1, title: "Paisaje lunar" },
  { id: 2, title: "Guerreros de terracota" },
];

export default function App() {
  const [lista, setLista] = useState(initialList);

  function handleClick() {
    // podemos utilizar tambien [...array] para hacer una copia del array original.
    let copia = lista.slice();
    copia.reverse();
    setLista(copia);
  }

  return (
    <>
      <button onClick={handleClick}>Invertir</button>
      <ul>
        {lista.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </>
  );
}
