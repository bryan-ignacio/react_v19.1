import { useState } from "react";
import { initialTravelPlan } from "./places";

export default function Lugares() {
  // el nodo raiz que es el root tiene los lugares principales.
  const [plan, setPlan] = useState(initialTravelPlan);

  // obtenemos los planetas
  const planetas = plan.childPlaces;

  return (
    <>
      <ol>
        {/* 
        recorremos cada planeta y lo convertimos en un Componente
        en donde mandamos su informacion.
         */}
        {planetas.map((planeta) => {
          return (
            <>
              <ArbolLugares sitio={planeta} />
              <p>----------------------termina el planeta</p>
            </>
          );
        })}
      </ol>
    </>
  );
}

function ArbolLugares({ sitio }) {
  // obtenemos los lugares de ese sitio
  // en la primera madamos los planetas y accedemos a los lugares de cada planeta
  const lugares = sitio.childPlaces;

  return (
    <>
      <li>
        {/* accedemos al planeta. */}
        <p>{sitio.title}</p>
        {/*
        como cada lugar tiene un childPlaces con nada 
         */}

        {lugares.length > 0 && (
          <ol>
            {lugares.map((lugar) => {
              return (
                <>
                  <ArbolLugares sitio={lugar} />
                </>
              );
            })}
          </ol>
        )}
      </li>
    </>
  );
}
