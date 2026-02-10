import { useReducer } from "react";
import AddTask from "./AddTask";
import TaskList from "./TaskList";
import taskReducer from "./tasksReducer";

/*
Entendiendo toda la Aplicacion:
  Esta es una aplicacion para gestionar tareas: 
    -Agregar Tarea
    -Editar Tarea
    -Borrar Tarea
    - al Editar una Tarea podemos Guardar la Tarea.
  la aplicacion tendra datos iniciales que mostrara al iniciar la aplicacion.
*/

let nextId = 3;
const initialTasks = [
  { id: 0, text: "El Camino del Filósofo", done: true },
  { id: 1, text: "Visitar el templo", done: false },
  { id: 2, text: "Beber té matcha", done: false },
];

export default function App() {
  // por el momento el estado y la funcion que actualiza el esta dispatch estan disponibles en App
  //ahora quiero que otros componentes lean la lista de tareas y la actualicen
  // aqui utilizamos el hook useReducer ya que actualizamos varias veces el estado y tiene mucha logica este componente.
  // useReducer(p1,p2): necesita dos parametros la funcionReducer y el valor inicial del estado en este caso le pasamos un array con datos inicales.
  // useReducer retorna dos variables [estado, funcionActualizaEstado]
  const [tasks, dispatch] = useReducer(taskReducer, initialTasks);

  /*
  la necesita el componente <AddTask/>
  esta funcion despacha la accion added para que la funcion reducer actualice el estado con el objeto accion.
  mandamos los datos necesarios para realizar la accion.
   */
  function handleAddTask(text) {
    dispatch({
      type: "added",
      id: nextId++,
      text: text,
    });
  }

  /*
  la necesita el componente <TaskList/>
  despacha a la funcion reducer el objeto action que tendra la accion a ejecutar para actualizar el estado.
  con los datos necesarios par realizar la accion.;
   */
  function handleChangeTask(task) {
    dispatch({
      type: "changed",
      task: task,
    });
  }

  /*
  la necesita el componente <TaskList/>
    necesita el id de la tarea a eliminar.
   */
  function handleDeleteTask(taskId) {
    dispatch({
      type: "deleted",
      id: taskId,
    });
  }

  /*
   Este Componente Renderiza un (<h1/>)(<AddTask/>)(<TaskList/>)

   como algunos componentes necesitan las funciones controladores de eventos para actualizar el estado tasks
   vamos a crear las funciones controladores de eventos que necesitan estos Componentes.
   */
  return (
    <>
      <h1>Dia libre en kyoto</h1>
      <AddTask onAddTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      />
    </>
  );
}
/*

*la prop controladora de eventos: onChangeTask contendra la funcion controladora de eventos handleChangeTask.
  handleChangeTask necesita un parametro para agregar una tarea.

*la prop controladora de eventos: onDeleteTask contendra la funcion controladora de eventos
handelDeleteTask.
  handleDeleteTask necesita un parametro task para eliminar esa tarea.

Y por que pasamos estas props controladoras de eventos al Componente TaskList?
  como podemos observar la estructura JSX del Componente <TaskList/>
  renderiza una lista de tareas necesita:
    1) la lista de tareas.
    2) la funcion controladora de eventos que actualiza una determinada tarea.
    3) la funcion controladora de eventos para eliminar una determinada tarea.

  pero por que?
  por que renderiza un componente <Task/> y este necesita estas funciones controladoras de eventos.

  AL inspeccionar el componente <Task/> observamos que:
    las necesita por que en su JSX hay botones para EditarTarea y ELiminarTarea
    por lo que necesitara actualizar el estado por lo cual necesitara esas props para actualizar el estado 
    de tareas.


 */
