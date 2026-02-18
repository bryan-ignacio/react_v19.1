/*
Desafio 3: arregla el debounce

En este ejemplo, todos los controladores de clic usan el “corte de rebote” o “debounce”. Para ver que significa esto, presiona uno de los botones. Fíjate como el mensaje aparece un segundo después. Si presionas el botón mientras esperas el mensaje, el temporizador se reiniciará. Así que si te mantienes cliqueando el mismo botón rápidamente muchas veces, el mensaje no aparecerá hasta un segundo después de que pares de hacer clic. El debounce te permite retrasar algunas acciones hasta que el usuario “pare de hacer cosas”.

Este ejemplo funciona, pero no tan bien como se esperaba. Los botones no son independientes. Para ver el problema, haz clic en uno de los botones, y luego inmediatamente haz clic en otro botón. Esperarías que después de un retraso, podrías ver los mensajes de ambos botones. Pero solo se muestra el mensaje del último botón. El mensaje del primer botón se pierde.

¿Por qué los botones están interfiriendo con los demás? Encuentra y arregla el problema.



*/

import { useRef } from "react";

export default function App() {
  return (
    <>
      <DebouncedButton onClick={() => alert("Cohete lanzado!")}>
        Lanza el cohete
      </DebouncedButton>
      <br />

      <DebouncedButton onClick={() => alert("Sopa Hervida!")}>
        Hierve la sopa
      </DebouncedButton>
      <br />
      <DebouncedButton onClick={() => alert("Cancion de cuna cantada")}>
        Canta una cancion de cuna
      </DebouncedButton>
    </>
  );
}

function DebouncedButton({ onClick, children }) {
  let timeoutIdRef = useRef(null);

  function handleClick() {
    clearTimeout(timeoutIdRef.current);

    timeoutIdRef.current = setTimeout(() => {
      onClick();
    }, 1000);
  }

  return (
    <>
      <button onClick={handleClick}>{children}</button>
    </>
  );
}
