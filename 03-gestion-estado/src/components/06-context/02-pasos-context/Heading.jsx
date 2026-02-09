import { useContext } from "react";
import { Contexto } from "./LevelContext";

export default function Heading({ children }) {
  //recibimos el contexto
  const nivel = useContext(Contexto);

  switch (nivel) {
    case 1:
      return <h1>{children}</h1>;

    case 2:
      return <h2>{children}</h2>;
    case 3:
      return <h3>{children}</h3>;
    case 4:
      return <h4>{children}</h4>;
    case 5:
      return <h5>{children}</h5>;
    case 6:
      return <h6>{children}</h6>;
    default:
      throw new Error("este level no existe" + nivel);
  }
}
