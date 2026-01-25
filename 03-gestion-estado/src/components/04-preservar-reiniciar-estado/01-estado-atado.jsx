import { useState } from "react";

export default function App() {
  const counter = <Counter />;

  return (
    <>
      <div>
        {counter}
        <br />
        {counter}
      </div>
    </>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const [hover, setHover] = useState(false);

  function handleClick() {
    setCount(count + 1);
  }

  let className = "normal";

  if (hover) {
    className = "fondo";
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
        className={className}
        onPointerEnter={() => setHover(true)}
        onPointerLeave={() => setHover(false)}
      >
        <p>{count}</p>
        <button onClick={handleClick}>Agregar Uno</button>
      </div>
    </>
  );
}
