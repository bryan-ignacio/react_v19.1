/*
Desafio 2:
    Arreglar un componente que no logra rerenderizar
    
    Este boton se supone que alterna entre mostrar "Encendido" y "Apagado".
    Sin embargo, siempre muestra "Apagado"
    Que esta mal en este codigo? arreglalo.
*/

import { useState } from "react";

export default function App() {
  //const isOnRef = useRef(false);

  const [isOn, setIsOn] = useState(false);

  function handleClick() {
    //  isOnRef.current = !isOnRef.current;
    setIsOn(!isOn);
  }

  return (
    <>
      <button onClick={handleClick}>{isOn ? "Encendido" : "Apagado"}</button>
    </>
  );
}
