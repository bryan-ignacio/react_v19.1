import { useState } from "react";

/*
Corregir la desaparicion del texto de entrada
Este ejemplo muestra un mensaje cuando se pulsa el boton.
Sin embargo, al pulsar el boton tambien se reinicia accidentalmente la entrada.
Por que ocurre esto?
arreglalo para que al pulsar el boton no se reinicie el texto de entrada.
*/

export default function App() {
  const [showHint, setShowHint] = useState(false);

  return (
    <>
      {showHint ? (
        <>
          <div>
            <p>
              <i>Pista: ¿Tu ciudad favorita?</i>
            </p>
            <Form />
            <br />
            <button
              onClick={() => {
                setShowHint(false);
              }}
            >
              Ocultar pista
            </button>
          </div>
        </>
      ) : (
        <>
          <div>
            <Form />
            <br />
            <button
              onClick={() => {
                setShowHint(true);
              }}
            >
              Mostrar pista
            </button>
          </div>
        </>
      )}
    </>
  );
}

function Desafio() {}

function Form() {
  const [text, setText] = useState("");
  return <textarea value={text} onChange={(e) => setText(e.target.value)} />;
}
