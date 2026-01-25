import { useState } from "react";

export default function Scoreboard() {
  const [isPlayerA, setIsPlayerA] = useState(true);
  return (
    <div>
      {isPlayerA ? <Counter person="Taylor" /> : <Counter person="Sarah" />}
      <br />
      <button
        onClick={() => {
          setIsPlayerA(!isPlayerA);
        }}
      >
        ¡Siguiente jugador!
      </button>
    </div>
  );
}

function Counter({ person }) {
  const [score, setScore] = useState(0);
  const [hover, setHover] = useState(false);

  let className = "counter";
  if (hover) {
    className += "hover";
  }

  return (
    <div
      className={className}
      onPointerEnter={() => setHover(true)}
      onPointerLeave={() => setHover(false)}
    >
      <h1>
        Puntos de {person}: {score}
      </h1>
      <button onClick={() => setScore(score + 1)}>Agregar uno</button>
    </div>
  );
}
