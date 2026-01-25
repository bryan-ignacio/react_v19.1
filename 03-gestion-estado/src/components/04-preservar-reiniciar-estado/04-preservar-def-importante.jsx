import { useState } from "react";

/*
pensarias que al marcar la casilla el estado se reiniciara ya que el jsx esta en distinta posicion
pero no. Esto se debe a que las dos etiquetas Counter se renderizan en la misma posicion.

React solo mira el arbol que retornas en ambos casos retornas un div con un Counter como primer hijo.
por eso React lo considera como el mismo Counter.



*/
export default function App() {
  //estado.
  const [isFancy, setIsFancy] = useState(false);

  // si es fancy entonces renderizara este jsx.
  if (isFancy) {
    /**
     * un div que contiene un Componente Counter con la prop isFancy=true
     *
     *
     */
    return (
      <div>
        <Counter isFancy={true} />
        <label>
          <input
            type="checkbox"
            checked={isFancy}
            onChange={(e) => {
              setIsFancy(e.target.checked);
            }}
          />
          Usar un estilo elegante
        </label>
      </div>
    );
  }

  // de lo contrario renderizara un div con un Componente Counter con la prop isFancy=false
  return (
    <div>
      <Counter isFancy={false} />
      <label>
        <input
          type="checkbox"
          checked={isFancy}
          onChange={(e) => {
            setIsFancy(e.target.checked);
          }}
        />
        Usar un estilo elegante
      </label>
    </div>
  );
}

function Counter({ isFancy }) {
  const [score, setScore] = useState(0);
  const [hover, setHover] = useState(false);

  let className = "counter";
  if (hover) {
    className += " hover";
  }
  if (isFancy) {
    className += " fancy";
  }

  return (
    <div
      className={className}
      onPointerEnter={() => setHover(true)}
      onPointerLeave={() => setHover(false)}
    >
      <h1>{score}</h1>
      <button onClick={() => setScore(score + 1)}>Agregar uno</button>
    </div>
  );
}
