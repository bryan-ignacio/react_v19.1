import { useContext, useState } from "react";
import { ContextDispatch, ContextTasks } from "./TasksContext";

export default function TaskList() {
  const tasks = useContext(ContextTasks);

  return (
    <>
      <ul>
        {tasks.map((task) => {
          return (
            <li>
              <Task task={task} />
            </li>
          );
        })}
      </ul>
    </>
  );
}

function Task({ task }) {
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useContext(ContextDispatch);

  function handleEditarClick() {
    setIsEditing(true);
  }

  function handleEditarChange(e) {
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

  function handleBorrarClick() {
    dispatch({
      type: "deleted",
      taskId: task.id,
    });
  }

  let contenido;

  if (isEditing) {
    contenido = (
      <>
        <input type="text" value={task.text} onChange={handleEditarChange} />
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
      <input type="checkbox" />
      {contenido}
      <button onClick={handleBorrarClick}>Borrar</button>
    </>
  );
}
