import { useState } from "react";

/*
 * como el valor de count es mostrado tiene sentido usar un valor de estado.
 * cuando se utiliza la funcionActualizadora del estado setCount()
 * react rerenderiza el componente y la pantalla se actualiza para reflejar el nuevo contador.
 */
export default function ConEstado() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <>
      <h1>con estado</h1>
      <button onClick={handleClick}>Hiciste click {count} veces</button>
    </>
  );
}
