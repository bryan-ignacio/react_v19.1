import { createContext } from "react";

// el valor por defecto de cada contexto es null.

//proporciona la lista actual de tareas.
export const TasksContext = createContext(null);

//proporciona la funcion que permite a los Componetes enviar acciones.
export const TasksDispatchContext = createContext(null);
