import { useRef } from "react";

/*
manipular el DOM con Refs:
a veces es posible que ncesites acceder a los elementos del DOM gestionados por React.
    ejemplos:
    * enfocar un nodo
       - desplazarse hasta el.
       - medir tamano y posicion.

*/
export default function Form() {
  // para acceder a un nodo DOM gestionado por React, primero utilizamos el hook useRef
  // declaramos el ref dentro del componente.
  const inputRef = useRef(null);

  function handleClick() {
    //como es un input podemos acceder a su propiedad focus y al hacer click enfocara este nodo dom que es un input.
    inputRef.current.focus();
  }
  return (
    <>
      {/* 
      pasamos la ref como atributo a la etique JSX para obtener el nodo DOM 
      ahora podemos acceder a esto nodo DOM desde los controladores de eventos y suar las APi del navegador.
      */}
      <input ref={inputRef} />
      <button onClick={handleClick}>Enfocar el input</button>
    </>
  );
}
// podemos almacenar ids de temporizadores.
// como las refs permanecen entre renderizaciones.
// las refs son como variables de estado que no desencadenan nuevos renderizados.
