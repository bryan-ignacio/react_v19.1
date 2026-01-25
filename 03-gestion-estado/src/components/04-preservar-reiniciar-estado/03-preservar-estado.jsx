import { useState } from "react";

/**
 *  El mismo Componente en la misma posicion preserva el estado.
 *
 *
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
