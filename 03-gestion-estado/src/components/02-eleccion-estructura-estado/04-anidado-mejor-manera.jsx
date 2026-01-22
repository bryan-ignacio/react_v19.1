import { useState } from "react";
import { initialTravelPlan } from "./places-plano";

function PlaceTree({ id, placesById }) {
  //guarda  el lugar que esta dentro del objeto placesById con el id mandado.
  const place = placesById[id];
  // el lugar tiene ;un childIds que es un arreglo de ids.
  const childIds = place.childIds;
  return (
    <li>
      {place.title}
      {childIds.length > 0 && (
        <ol>
          {childIds.map((childId) => (
            <PlaceTree key={childId} id={childId} placesById={placesById} />
          ))}
        </ol>
      )}
    </li>
  );
}

export default function TravelPlan() {
  //estado que guarda la informacion del objeto
  const [plan, setPlan] = useState(initialTravelPlan);
  //root contiene el primer elemento del objeto.
  const root = plan[0];
  //contiene los ids del  childIds del objeto root.
  const planetIds = root.childIds;
  return (
    <>
      <h2>Lugares a visitar</h2>
      <ol>
        {planetIds.map((id) => (
          <PlaceTree key={id} id={id} placesById={plan} />
        ))}
      </ol>
    </>
  );
}
