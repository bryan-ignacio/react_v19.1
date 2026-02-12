import { createContext, useReducer } from "react";

const initialTasks = [
  { id: 0, text: "El Camino del Filósofo", done: true },
  { id: 1, text: "Visitar el templo", done: false },
  { id: 2, text: "Beber té matcha", done: false },
];

//creo mis dos contextos.
export const ContextTasks = createContext(null);
export const ContextDispatch = createContext(null);

//el componente; Va a proveer el contexto tanto de las tasks como la funcion reducer
// a todo el children en este caso <AddTask/> y <TaskList/>
export function TasksProvider({ children }) {
  const [tasks, dispatch] = useReducer(funcionReducer, initialTasks);
  return (
    <>
      <ContextTasks.Provider value={tasks}>
        <ContextDispatch.Provider value={dispatch}>
          {children}
        </ContextDispatch.Provider>
      </ContextTasks.Provider>
    </>
  );
}

// funcion reducer sirve para retornar el siguiente estado.
export function funcionReducer(tasks, action) {
  switch (action.type) {
    case "added": {
      return [
        ...tasks,
        {
          id: action.id,
          text: action.text,
          done: false,
        },
      ];
    }
    case "changed": {
      return;
    }
    case "deleted": {
      return;
    }
    default:
      throw Error("accion no encontrada: " + action.type);
  }
}
