import { useState } from "react";

export default function App() {
  return (
    <>
      <Counter />
    </>
  );
}

function Counter() {
  const [counter, setCounter] = useState(0);

  function handleClick() {
    // funcion de actualizacion.
    setCounter((n) => n + 1); // 0 => 0 + 1 = 1
    setCounter((n) => n + 1); // 1 => 1 + 1 = 2
    setCounter((n) => n + 1); // 2 => 2 + 1 = 3
  }

  return (
    <>
      <div>{counter}</div>
      <div>
        <button onClick={handleClick}>+3</button>
      </div>
    </>
  );
}
