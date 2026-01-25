import { useState } from "react";

/**
 * Al momento de dejar de renderizar el segundo contador, su estado desaparece por completo.
 * Cuando React elimina un componente destruye el estado.
 *
 * Al marcar para que renderice el componente renderizara un nuevo Componente con su estado con el valor inicial que es 0
 *
 * React preserva el estado de un Componente mientras se renderiza en su posicion en el arbol de la interfaz de usuario.
 * Si se elimina, o se renderiza un componente diferente en la misma posicion, React descarta su estado.
 *
 */
export default function App() {
  const [check, setCheck] = useState(true);

  function handleChangeCheck(e) {
    setCheck(e.target.checked);
  }

  return (
    <>
      <Counter />

      <br />
      {check && <Counter />}
      <br />
      <label>
        <input type="checkbox" onChange={handleChangeCheck} checked={check} />{" "}
        Renderizar el segundo Contador
      </label>
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
          border: "1px solid white",
          width: "100px",
          height: "100px",
          textAlign: "center",
        }}
      >
        <p>{count}</p>
        <button onClick={handleClick}>Agregar Uno</button>
      </div>
    </>
  );
}
