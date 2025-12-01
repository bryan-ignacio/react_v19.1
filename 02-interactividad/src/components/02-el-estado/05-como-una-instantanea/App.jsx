import { useState } from "react";

export default function TrafficLight() {
  const [walk, setWalk] = useState(true);

  function handleClick() {
    // la instantanea de walk es true.
    setWalk(!walk);
    // al modificarla esta se hara hasta en la proxima renderizacion.
    if (walk == true) {
      alert("Parar es lo siguiente ");
    } else {
      alert("Caminar es lo siguiente");
    }
  }

  return (
    <>
      <button onClick={handleClick}>
        Cambia a {walk ? "Parar" : "Caminar"}
      </button>
      <h1
        style={{
          color: walk ? "darkgreen" : "darkred",
        }}
      >
        {walk ? "Caminar" : "Parar"}
      </h1>
    </>
  );
}
