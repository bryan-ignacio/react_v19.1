import { useState } from "react";

/*
Desafio 2: Intercambiar dos campos de formularios.
Este formulario permite introducir el nombre y los apellidos.

Tambien tiene una casilla de verificacion que controla que campo va primero.
SI marca la casilla entonces el campo  apellido aparecera antes que el campo nombre.

Casi funciona, pero hay un error. Si rellenas la entrada “Nombre” y marcas la casilla,
el texto se queda en la primera entrada (que ahora es “Apellido”). 
Arréglalo para que el texto de la entrada también se mueva cuando inviertas el orden.


Solucion:
NO estaba tan sencilla ya que lo de keys se indico solo para reiniciar estados pero no para que permanescan.
  al darle una key a cada Componente Field esto le indica a React como emparejar elestado correcto para cualquiera de los dos <Field>

*/

export default function App() {
  const [reverse, setReverse] = useState(false);
  let checkbox = (
    <label>
      <input
        type="checkbox"
        checked={reverse}
        onChange={(e) => setReverse(e.target.checked)}
      />
      Invertir el orden
    </label>
  );

  return (
    <>
      {reverse ? (
        <>
          <Field label={"Apellido"} key={"apellido"} />
          <br />
          <Field label={"Nombre"} key={"nombre"} />
          <br />
          <br />
          {checkbox}
        </>
      ) : (
        <>
          <Field label="Nombre" key={"nombre"} />
          <br />
          <Field label="Apellido" key={"apellido"} />
          <br />
          <br />
          {checkbox}
        </>
      )}
    </>
  );
}

function Field({ label }) {
  const [text, setText] = useState("");
  return (
    <label>
      {label}:{" "}
      <input
        type="text"
        value={text}
        placeholder={label}
        onChange={(e) => setText(e.target.value)}
      />
    </label>
  );
}
