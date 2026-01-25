import { useState } from "react";

export default function Accordion() {
  return (
    <>
      <Panel title={"Acerca de"}>
        Con una población de unos 2 millones de habitantes, Alma Ata es la mayor
        ciudad de Kazajistán. De 1929 a 1997 fue su capital.
      </Panel>

      <Panel title={"Etimología"}>
        El nombre proviene de алма, palabra en kazajo que significa "manzana" y
        suele traducirse como "lleno de manzanas". De hecho, se cree que la
        región que rodea a Alma Ata es el hogar ancestral de la manzana, y se
        considera que este fruto silvestre Malus sieversii es un candidato
        probable para el ancestro de la manzana doméstica moderna.
      </Panel>
    </>
  );
}

function Panel({ title, children }) {
  const [isActive, setIsActive] = useState(false);

  function handleClick() {
    setIsActive(!isActive);
  }

  if (isActive) {
    return (
      <>
        <div style={{ border: "1px solid white" }}>
          <h2>{title}</h2>
          <p>{children}</p>
        </div>
      </>
    );
  }

  return (
    <>
      <div style={{ border: "1px solid white" }}>
        <h2>{title}</h2>
        <button onClick={handleClick}>Mostrar</button>
      </div>
    </>
  );
}
