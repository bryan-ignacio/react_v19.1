import { Contexto } from "./LevelContext";

export default function Section({ level, children }) {
  return (
    <>
      {/*
       vamos a proveer los datos a todo el arbol debajo.
       - Si un componente pregunta por Contexto enviale este valor
       */}
      <section>
        <Contexto.Provider value={level}>{children}</Contexto.Provider>
      </section>
    </>
  );
}
