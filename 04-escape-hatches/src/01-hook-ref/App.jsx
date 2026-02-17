import { useRef } from "react";

export default function App() {
  // le damos un valor inicial al que quiero hacer referencia.
  // esta es una variable que hace referencia al valor cero.
  const ref = useRef(0);

  // ref.current: para acceder al valor actual de ref
  // podemos leerlo y modificarlo es mutable.

  function handleClick() {
    ref.current = ref.current + 1;
    alert("hiciste clic " + ref.current + " veces");
  }

  return (
    <>
      <button onClick={handleClick}>Hazme Click</button>
    </>
  );
}

/*
    ref:
    puede hacer referencia a culaquier cosa: numero,string,objeto, funcion.

    ref:
     es un objeto plano JS con la propiedad current que se puede leer y modificar.

    en este ejemplo:
    el componente no se rerenderiza con cada incremento.
    las refs son retenidas por React entre rerenderizados.
    al actualizar una ref no renderiza el componente.

    

*/
