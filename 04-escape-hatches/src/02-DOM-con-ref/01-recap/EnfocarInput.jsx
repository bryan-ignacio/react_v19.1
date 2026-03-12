import { useRef } from "react";

export default function Form() {
  const myRef = useRef(null);

  function handleClick() {
    myRef.current.focus();
  }

  return (
    <>
      <input type="text" ref={myRef} />
      <button onClick={handleClick}>{"Enfocar el input"}</button>
    </>
  );
}

/*
implementacion:
1. declaramos un myRef con el Hook useRef.
2. asignamos el myRef al input con la propiedad ref. Esto hace que el myRef.current apunte al nodo del DOM del input.
3. en el controlador de eventos handleClick, accedemos a myRef.current y llamamos al método focus() para enfocar el input cuando se hace clic en el botón.


Los refs permanecen entre renderizados. las refs son como variables de estado que no
desecadena nuevos renderizados cuando las pones. 


*/
