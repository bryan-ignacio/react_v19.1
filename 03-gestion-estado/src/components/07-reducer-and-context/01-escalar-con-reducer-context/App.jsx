/*
(pasar el estado y las funciones controladoras) como alternativa a pasarlas por props.
podrias poner tanto el estado (tasks) como la funcion (dispatch) en el contexto.

De esta forma  cualquier componente por debajo de TaskApp en el arbol podra leer
las (tasks) y enviar acciones sin la (perforacion de props)
*/

import { useReducer } from "react";
import { tasksReducer } from "./tasksReducer";
import AddTask from "./AddTask";
import TaskList from "./TaskList";
import { TasksContext, TasksDispatchContext } from "./Context";

const initialTasks = [
  { id: 0, text: "El Camino del Filósofo", done: true },
  { id: 1, text: "Visitar el templo", done: false },
  { id: 2, text: "Beber té matcha", done: false },
];

export default function TaskApp() {
  /*
    useReducer(p1,p2):
    p1: funcion reducer que contendra toda la logica y retorna el siguiente estado.
    p2: valor inicial del estado.
    */
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

  // vamos a proporcionar el contexto a todo el arbol de abajo.
  return (
    <>
      <TasksContext.Provider value={tasks}>
        <TasksDispatchContext.Provider value={dispatch}>
          <h1>form</h1>
          <AddTask />
          <TaskList />
        </TasksDispatchContext.Provider>
      </TasksContext.Provider>
    </>
  );
}
