import { useState } from "react";
import { initialTravelPlan } from "./places";

export default function Lugares() {
  const [lugares, setLugares] = useState(initialTravelPlan);

  const planetas = lugares.childPlaces;
  return (
    <>
      <ol>
        {planetas.map((planeta) => {
          return <HojasLugares lugar={planeta} />;
        })}
      </ol>
    </>
  );
}

function HojasLugares({ lugar }) {
  const lugares = lugar.childPlaces;
  return (
    <>
      <li>
        <p>{lugar.title}</p>
        {lugares.length > 0 && (
          <ol>
            {lugares.map((lugarChild) => {
              return <HojasLugares lugar={lugarChild} />;
            })}
          </ol>
        )}
      </li>
    </>
  );
}
