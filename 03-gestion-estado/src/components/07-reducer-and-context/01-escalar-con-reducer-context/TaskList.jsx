import { useContext, useState } from "react";
import { TasksContext, TasksDispatchContext } from "./Context";

export default function TaskList() {
  const tasks = useContext(TasksContext);

  return (
    <>
      <ul>
        {tasks.map((task) => {
          return (
            <li key={task.id}>
              <Task task={task} />
            </li>
          );
        })}
      </ul>
    </>
  );
}

/*
este componente recibe un parametro que es el task.
 */
function Task({ task }) {
  // necesita la funcion dispatch para actualizar el estado.
  const dispatch = useContext(TasksDispatchContext);
  // necesito un estado para verificar que mostarar en mi arbol.
  const [isEditing, setIsEditing] = useState(false);

  let contenido;

  function handleEditarClick() {
    setIsEditing(true);
  }

  function handleChange(e) {
    dispatch({
      type: "changed",
      task: {
        ...task,
        text: e.target.value,
      },
    });
  }

  function handleGuardarClick() {
    setIsEditing(false);
  }

  function handleCheckChange(e) {
    dispatch({
      type: "changed",
      task: {
        ...task,
        done: e.target.checked,
      },
    });
  }

  function handleBorrarClick() {
    dispatch({
      type: "deleted",
      taskId: task.id,
    });
  }

  if (isEditing) {
    contenido = (
      <>
        <input type="text" value={task.text} onChange={handleChange} />
        <button onClick={handleGuardarClick}>Guardar</button>
      </>
    );
  } else {
    contenido = (
      <>
        <label>{task.text}</label>
        <button onClick={handleEditarClick}>Editar</button>
      </>
    );
  }

  return (
    <>
      <input type="checkbox" checked={task.done} onChange={handleCheckChange} />
      {contenido}
      <button onClick={handleBorrarClick}>Borrar</button>
    </>
  );
}
