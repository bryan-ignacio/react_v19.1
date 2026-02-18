import { useRef } from "react";

/*
SI intento implementar ref. react nunca rerenderizaria el componente para mostrar el nuevo valor de ref.
nunca verias cambiar el contador. observa como al hacer click en este boton no se actualiza el texto.
*/

export default function ConRef() {
  let ref = useRef(0);

  function handleClick() {
    ref.current = ref.current + 1;
  }

  return (
    <>
      <h1>Con Ref</h1>
      <button onClick={handleClick}>Hiciste click {ref.current} veces</button>
    </>
  );
}

/*
esta es la razon por la que leer ref.current durante el renderizado conduce a 
un codigo poco fiable. si eso es lo que necesitas, usa en su lugar el estado.
*/
