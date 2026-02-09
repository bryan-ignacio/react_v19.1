import { useContext } from "react";
import { Contexto } from "./LevelContext";

export default function Section({ children, isFancy }) {
  const level = useContext(Contexto);
  return (
    <>
      <section className={"section " + (isFancy ? "fancy" : "")}>
        <Contexto.Provider value={level + 1}>{children}</Contexto.Provider>
      </section>
    </>
  );
}
