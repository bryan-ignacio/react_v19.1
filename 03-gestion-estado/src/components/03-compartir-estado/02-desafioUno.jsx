import { useState } from "react";

/*
 Desafio Uno: Entradas Sincronizadas
 Estas dos entradas son independientes. haz que se mantenga sincronizadas:
 la edicion de una entrada deberia actualizar la otra con el mismo texto y viceversa.
*/
export default function DesafioUno() {
  const [text, setText] = useState("");

  function handleChange(e) {
    setText(e.target.value);
  }

  return (
    <>
      <Input label="Primera entrada" onChangeInput={handleChange} text={text} />
      <Input label="Segunda entrada" onChangeInput={handleChange} text={text} />
    </>
  );
}

function Input({ label, onChangeInput, text }) {
  //const [text, setText] = useState("");

  //   function handleChange(e) {
  //     setText(e.target.value);
  //   }

  return (
    <>
      <label>
        {label} <input value={text} onChange={onChangeInput} />
      </label>
      <br />
      <br />
    </>
  );
}
