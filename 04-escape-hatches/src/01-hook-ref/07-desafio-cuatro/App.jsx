import { useRef, useState } from "react";

/*
Desafio 4: Lee el ultimo estado.
En este ejemplo, después de que presionas “Enviar”, hay un pequeño retraso antes de que el mensaje se muestre. Escribe “hola”, presiona Enviar, y luego rápidamente edita el input otra vez. A pesar de tus cambios, la alerta seguirá mostrando “hola” (que fue el valor del estado en el momento en el que hiciste clic en el botón).

Normalmente, este es el comportamiento que quieres en una aplicación. Sin embargo, en ocasiones quieres que algún código asíncrono lea la última versión de algún estado. ¿Se te ocurre alguna manera de hacer que la alerta muestre el texto actual del input en lugar del que estaba en el momento del clic?

*/
export default function App() {
  // utilizo useState para que la informacion permanesca entre renderizaciones.
  const [text, setText] = useState("");
  // cree un ref para que mantenga la informacion entre renderizaciones.
  // el valor inicial sera el valor de la variable de estado.
  let textRef = useRef(text);

  // esta funcion controladora de eventos se ejecuta cuando ocurre el evento onChange
  // lo que hace es modificar la variable de estado cuando ocurre el evento onchange
  function handleChange(e) {
    //al actualizar el estado mandamos la informacion del ref
    setText(textRef.current);

    // actualizamos la ref.
    textRef.current = e.target.value;
  }

  // funcion controladora de evento se ejecuta cuando ocurre el evento onClick.
  // llama la funcion asincrona para ejecutar un alert a los 3 segundos.
  // mostrando un texto.
  function handleClick() {
    setTimeout(() => {
      alert("Enviando: " + text);
    }, 3000);
  }

  return (
    <>
      <input type="text" value={text} onChange={handleChange} />
      <button onClick={handleClick}>Enviar</button>
    </>
  );
}

/*
El estado funciona como una instantanea, asi que no puedes leer el ultimo estado
de una operacion asincrona como un timeout.

sin embargo, puedes guardar el ultimo texto del input en una ref.
una ref es  mutable, asi que puedes leer la propiedad current en cualquier momento.

como el texto actual tambien se usa para el renderizado, en este ejemplo


*/
