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
  // const dispatch = useContext(ContextTasks);

  function handleEditarClick() {
    setIsEditing(true);
  }

  let contenido;

  if (isEditing) {
    contenido = (
      <>
        <input type="text" />
        <button>Guardar</button>
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
      <button>Borrar</button>
    </>
  );
}
