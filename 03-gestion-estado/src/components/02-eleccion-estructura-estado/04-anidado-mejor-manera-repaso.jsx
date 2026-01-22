import { useState } from "react";
import { initialTravelPlan } from "./places-plano";

export default function Plan() {
  // primero; se utililizan los datos del objeto y se guardan en plan.
  // contendra todos los objetos con su respectivo numero.
  const [plan, setPlan] = useState(initialTravelPlan);
  // segundo; esta variable contendra el primer objeto qu contiene los ids de  los planetas.
  const root = plan[0];
  //tercero; esta variable contendra el arreglo de los hijos del root.
  // osea los planetas
  const planetasIds = root.childIds;

  return (
    <>
      <ol>
        {/* 
        recorremos cada uno de los planetas que estan 
        solo se manda el numero del objeto id.
        se transforma cada uno de los elementos en un Componente ArbolLugar
        se le pasan props.
        */}
        {planetasIds.map((planetaId) => {
          return (
            <ArbolLugar key={planetaId} id={planetaId} lugaresById={plan} />
          );
        })}
      </ol>
    </>
  );
}

function ArbolLugar({ key, id, lugaresById }) {
  //ahora accedemos al lugar con el id y el objeto que tiene la info.
  const lugar = lugaresById[id];
  // de ese lugar accedemos a sus childIds si es que tienen
  // si no tiene ese lugar entonces childIds.length = 0
  const childIds = lugar.childIds;
  return (
    <>
      <li key={key}>
        <p>{lugar.title}</p>
        {childIds.length > 0 && (
          <ol>
            {childIds.map((child) => {
              return (
                <ArbolLugar key={child} id={child} lugaresById={lugaresById} />
              );
            })}
          </ol>
        )}
      </li>
    </>
  );
}
