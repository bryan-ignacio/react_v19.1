import { createContext } from "react";

// creamos el context  lo exportamos para que los componentes lo puedan ver.
//-parametro: el unico parametro que recibe es el valor predeterminado en este caso 1 ya que es el encabezado mas grande.
export const LevelContext = createContext(1);
