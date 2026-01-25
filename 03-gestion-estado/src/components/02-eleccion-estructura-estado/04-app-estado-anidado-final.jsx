import { useState } from "react";
import { initialTravelPlan } from "./places-plano";

export default function TravelPlan() {
  // la variable de estado contiene el objeto estructurado de forma plana.
  const [plan, setPlan] = useState(initialTravelPlan);

  function handleComplete(parentId, childId) {
    // accedemos al objeto con el parentId que es el padre
    const parent = plan[parentId];
    // Crear una nueva versión del lugar principal
    // que no incluye ID del hijo.
    const nextParent = {
      ...parent,
      childIds: parent.childIds.filter((id) => id !== childId),
    };
    // Actualizar el objeto de estado raíz...
    setPlan({
      ...plan,
      // ...para que tenga el padre este actualizado.
      [parentId]: nextParent,
    });
  }

  // esta variable contiene el root y este tiene la propiedad childIds que contiene los ids de los planetas.
  const root = plan[0];
  // esta variable es un arreglo que contiene los ids de los planetas.
  const planetIds = root.childIds;

  return (
    <>
      <h2>Lugares a visitar</h2>
      <ol>
        {planetIds.map((id) => (
          <PlaceTree
            key={id}
            id={id}
            parentId={0}
            placesById={plan}
            onComplete={handleComplete}
          />
        ))}
      </ol>
    </>
  );
}

function PlaceTree({ id, parentId, placesById, onComplete }) {
  // primera iteracion: recibe id=1, parentId=0, placesById=plan
  // placesById[1] = Tierra
  const place = placesById[id];
  // childsIds =[2,10,19,26,34]
  const childIds = place.childIds;
  return (
    <li>
      {/* tierra */}
      {place.title}
      <button
        onClick={() => {
          onComplete(parentId, id);
        }}
      >
        Completado
      </button>
      {/* si el arreglo de childsIds = 0 solo renderizara el nombre del lugar con el boton */}
      {/* de lo contrario si childsIds > 0 entonces renderizara una lista ordenada con los lugares que tenga ese arreglo. */}
      {/* primera iteracion: childsIds = 5 por lo que renderiza una lista ordenada */}
      {childIds.length > 0 && (
        <ol>
          {/* recorre con map el arreglo childIds = [2,10,19,26,34] */}
          {childIds.map((childId) => (
            <PlaceTree
              key={childId}
              id={childId}
              parentId={id}
              placesById={placesById}
              onComplete={onComplete}
            />
          ))}
        </ol>
      )}
      <br />
    </li>
  );
}
