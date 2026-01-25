import { useState } from "react";

export default function App() {
  //estado
  const [isFancy, setIsFancy] = useState(false);

  /**
   * si es fancy entonces renderiza un div que contiene un Counter
   * de lo contrario renderiza un section que contiene un COunter
   * puedes ver la diferencia en el arbol de renderizado ya que pasamos de un div a un section.
   */
  return (
    <div>
      {isFancy ? (
        <div>
          <Counter isFancy={true} />
        </div>
      ) : (
        <section>
          <Counter isFancy={false} />
        </section>
      )}
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

/*
EL estado del contador se reinicia cunado se hace clik en la casilla de verificacion.
AUnque se renderiz un Counter, el primer hijo del div cambia de <div> a <section>
cuando el primer hijo se elimino del DOM, todo el arbol debajo de el incluyendo counter y su estado se destruyeron.

*/

//Si se quiere preservar el estado entre renderizaciones la estructura del arbol debe ser la misma.
