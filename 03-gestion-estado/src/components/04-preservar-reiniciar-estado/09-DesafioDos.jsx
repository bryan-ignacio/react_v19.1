import { useState } from "react";

/*
Desafio 2: Intercambiar dos campos de formularios.
Este formulario permite introducir el nombre y los apellidos.

Tambien tiene una casilla de verificacion que controla que campo va primero.
SI marca la casilla entonces el campo  apellido aparecera antes que el campo nombre.

Casi funciona, pero hay un error. Si rellenas la entrada “Nombre” y marcas la casilla,
el texto se queda en la primera entrada (que ahora es “Apellido”). 
Arréglalo para que el texto de la entrada también se mueva cuando inviertas el orden.

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
  if (reverse) {
    return (
      <>
        <Field key="lastName" label="Apellido" />
        <Field key="firstName" label="Nombre" />
        {checkbox}
      </>
    );
  } else {
    return (
      <>
        <Field key="firstName" label="Nombre" />
        <Field key="lastName" label="Apellido" />
        {checkbox}
      </>
    );
  }
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
