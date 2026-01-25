import { useState } from "react";

/**
 *  El mismo Componente en la misma posicion preserva el estado.
 * Es el mismo componente en la misma posicion, por lo tanto desde la perspectiva de React, es el mismo contador.
 * Recuerda que es la posicion en el arbol de la UI lo que importa no la posicion en el jsx.
 */
export default function App() {
  const [check, setCheck] = useState(false);

  function handleChangeCheck(e) {
    setCheck(e.target.checked);
  }

  return (
    <>
      <Counter check={check} onChangeCheck={handleChangeCheck} />
      <br />
      <div>
        <label htmlFor="">
          <input type="checkbox" onChange={handleChangeCheck} checked={check} />{" "}
          Dale Estilo
        </label>
      </div>
    </>
  );
}

function Counter({ check }) {
  const [count, setCount] = useState(0);
  const [hover, setHover] = useState(false);

  function handleClick() {
    setCount(count + 1);
  }
  let className = "normal";

  if (hover) {
    className = "fondo";
  }

  if (check) {
    className = "estilo";
  }

  return (
    <>
      <div
        onPointerEnter={() => setHover(true)}
        onPointerLeave={() => setHover(false)}
        className={className}
      >
        <p>{count}</p>
        <button onClick={handleClick}>Agregar Uno</button>
      </div>
    </>
  );
}
