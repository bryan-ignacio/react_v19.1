import { useState } from "react";

/*
Diferentes Componentes en la misma posicion reinician el estado:
En este ejemplo al marcar la casilla de verificacion se sustituye
El Componente Counter por un parrafo <p></p> 
 */
export default function App() {
  const [check, setCheck] = useState(false);

  function handleChageCheck(e) {
    setCheck(e.target.checked);
  }

  if (check) {
    return (
      <>
        <p>Nos Vemos luego!</p>
        <br />
        <label>
          <input type="checkbox" onChange={handleChageCheck} checked={check} />{" "}
          Tomate un descanso
        </label>
      </>
    );
  } else {
    return (
      <>
        <div>
          <Counter />
          <br />
          <label>
            <input
              type="checkbox"
              onChange={handleChageCheck}
              checked={check}
            />{" "}
            Tomate un descanso
          </label>
        </div>
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
        <div style={{ border: "1px solid white" }}>
          <p>{count}</p>
          <button onClick={handleClick}>Agregar Uno</button>
        </div>
      </>
    );
  }
}

/*
Aqui se cambia entre diferentes tipos de Componentes en la misma posicion.
Inicialmente, el primer hijo del div contenia un Counter. 
Pero cuando lo cambiaste por un p, React elimino el Counter del arbol de la UI y destruyo su estado.\

Al volver a cambiar se borra el <p></p> y se agrega el componente Counter.

*/
