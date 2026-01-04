/**
 *
 * para reemplazar elementos en un array se utiliza map().
 * - dentro de la llamada al map() se recibe el indice del elemento como segundo argumento
 *   utilizalo para devolver el elemento original o cambiarlo.
 */

import { useState } from "react";

export default function App() {
  return (
    <>
      <Contador />
    </>
  );
}

let initialCounters = [0, 0, 0];

function Contador() {
  const [contadores, setContadores] = useState(initialCounters);

  function handleClick(indice) {
    let contadoresUpdate = contadores.map((contador, i) => {
      if (i === indice) {
        return contador + 1;
      } else {
        return contador;
      }
    });
    setContadores(contadoresUpdate);
  }
  return (
    <>
      <h4>Contadores</h4>
      <ul>
        {contadores.map((contador, indice) => (
          <li>
            {contador} <button onClick={() => handleClick(indice)}>+1</button>
          </li>
        ))}
      </ul>
    </>
  );
}
