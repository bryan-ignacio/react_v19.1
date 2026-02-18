/*
Desafio Uno:
escribe un mensaje y haz click en enviar.
notaras:
    1. que hay un retraso de tres segundos antes de que veas la alerta de Enviado
    2. durante este retraso puedes ver un boton deshacer.
    3. Haz clic en el. este boton de Deshacer se supone que debe evitar que el mensaje
       de Enviado aparezca.
    4. hace esto llamando a clearTimeout para el identificador del timeout guardado
       durante handleSend. sin embargo, incluso despues de hacer click en deshacer
       el mensaje de enviado sigue apareciendo.
    
       Encuentra por que no funciona y arreglalo.
*/

import { useRef, useState } from "react";

export default function App() {
  const [isSending, setIsSending] = useState(false);
  const [text, setText] = useState("");
  // antes teniamos un let timeoutId = null pero esta variable no sobreviven
  // entre renderizados porque cada renderizado ejecuta tu componente e inicializa sus
  //variables desde cero.

  // por lo que guardamos en un ref. preservara la informacion entre renderizaciones.
  let refTimeoutId = useRef(null);

  function handleEnviarClick() {
    // cambia el valor del estado a enviado=true
    setIsSending(true);

    refTimeoutId.current = setTimeout(() => {
      //luego mostrara el alert con el mensaje que fue enviado.
      alert("Enviado!");
      // ahora cambio el valor del estado a false para inidicar que ya fue enviado y
      // cambia a no enviado.
      setIsSending(false);
    }, 3000);
  }

  function handleChange(e) {
    setText(e.target.value);
  }

  function handleUndo() {
    setIsSending(false);
    clearTimeout(refTimeoutId.current);
  }

  let content;

  if (isSending) {
    content = (
      <>
        <button disabled={isSending}>Enviando...</button>
        <button onClick={handleUndo}>Deshacer</button>
      </>
    );
  } else {
    content = (
      <>
        <button onClick={handleEnviarClick}>Enviar</button>
      </>
    );
  }

  return (
    <>
      <div>
        <input type="text" value={text} onChange={handleChange} />
        {content}
      </div>
    </>
  );
}

/*
isSend?
false: input y botonEnviar
true: input, botonEnviar, botonDeshacer
*/
