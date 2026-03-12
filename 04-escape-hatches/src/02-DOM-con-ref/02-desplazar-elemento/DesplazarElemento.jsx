import { useRef } from "react";
import "./desplazarElemento.css";

export default function DesplazarElemento() {
  const refFirstCat = useRef(null);
  const refSecondCat = useRef(null);
  const refThirdCat = useRef(null);

  function handleClickFirst() {
    refFirstCat.current.scrollIntoView({ behavior: "smooth" });
  }

  function handleClickSecond() {
    refSecondCat.current.scrollIntoView({ behavior: "smooth" });
  }

  function handleClickThird() {
    refThirdCat.current.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <>
      <div className="contenedor">
        <h1>Desplazar elemento</h1>
        <button onClick={handleClickFirst}>{"Neo"}</button>
        <button onClick={handleClickSecond}>{"Millie"}</button>
        <button onClick={handleClickThird}>{"Bella"}</button>
      </div>
      <div className="contenedor2">
        <ul className="lista">
          <li>
            <img
              src="https://placecats.com/neo/300/200"
              alt="first cat"
              ref={refFirstCat}
            />
          </li>
          <li>
            <img
              src="https://placecats.com/millie/200/200"
              alt="second cat"
              ref={refSecondCat}
            />
          </li>
          <li>
            <img
              src="https://placecats.com/bella/199/200"
              alt="third cat"
              ref={refThirdCat}
            />
          </li>
        </ul>
      </div>
    </>
  );
}

/*
como gestionar una lista de refs usando un callback ref:
si no se sabe cuantos elementos tiene una lista entonces utilizamos esta forma:


esto no funciona: 
ya que los hooks solo pueden ser llamados en el nivel superior de un componente.
no se puede llamar un hook dentro de un bucle, una condición o una función anidada.
<ul>
    {
        items.map(
            (item) =>{
                    const ref = useRef(null);
                    return <li ref={ref}/>'
                }
        )
    }
</ul>

FORMA CORRECTA:
Pasar una funcion al atributo ref, a esto se le llama callback ref.
que es lo que hace react llamara al callback ref con el nodo DOM cuando sea el momento de poner
la ref, y con null cuando sea el momento de limpiarla.
esto nos permite almacenar el nodo DOM en una variable o en un array, dependiendo de nuestras necesidades.

*/
