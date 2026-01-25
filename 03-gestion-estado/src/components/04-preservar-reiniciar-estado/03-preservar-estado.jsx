import { useState } from "react";

/**
 *  El mismo Componente en la misma posicion preserva el estado.
 *
 *
 */
export default function App() {
  return (
    <>
      <Counter />
    </>
  );
}

function Counter() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <>
      <div
        style={{
          border: "2px solid gray",
          width: "100px",
          height: "120px",
          textAlign: "center",
        }}
      >
        <p>{count}</p>
        <button onClick={handleClick}>Agregar Uno</button>
      </div>
    </>
  );
}
