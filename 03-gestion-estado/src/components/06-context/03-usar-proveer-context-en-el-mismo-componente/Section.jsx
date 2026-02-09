import { useContext } from "react";
import { Contexto } from "./LevelContext";

export default function Section({ children }) {
  //usamos el contexto y proveemos los datos en el mismo componente.
  const level = useContext(Contexto);

  return (
    <>
      <section style={{ border: "1px solid white", padding: "20px" }}>
        <Contexto.Provider value={level + 1}>{children}</Contexto.Provider>
      </section>
    </>
  );
}
