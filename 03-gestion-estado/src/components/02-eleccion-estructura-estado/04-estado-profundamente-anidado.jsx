import { useState } from "react";
import { initialTravelPlan } from "./places.js";

function ArbolLugar({ place }) {
  // se pasa el place como prop y en este accedemos al arreglo de lugares de ese lugar
  const childPlaces = place.childPlaces;
  return (
    <>
      <li>
        {place.title}
        {childPlaces.length > 0 && (
          <ol>
            {childPlaces.map((place) => (
              <ArbolLugar key={place.id} place={place} />
            ))}
          </ol>
        )}
      </li>
    </>
  );
}

export default function PlanDeViaje() {
  //esta variable de estado contiene  un objeto que contiene objetos anidados.
  const [plan, setPlan] = useState(initialTravelPlan);
  //accedemos a los planetas que se encuentran en childplaces en root.
  const planets = plan.childPlaces;

  return (
    <>
      principio del jsx del componente------------------
      <h2>Lugares para visitar</h2>
      <ol>
        {planets.map((place) => (
          <ArbolLugar key={place.id} place={place} />
        ))}
      </ol>
      final del jsx del componente---------------------
    </>
  );
}
