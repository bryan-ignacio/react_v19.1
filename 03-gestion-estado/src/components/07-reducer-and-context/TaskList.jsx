import { useState } from "react";

/*
este Componente TaskList: renderiza componentes Tareas con las props controladoras de eventos
pasadas por el  componente Padre.
*/
export default function TaskList({ tasks, onChangeTask, onDeleteTask }) {
  return (
    <>
      <ul>
        {tasks.map((task) => {
          return (
            <li key={task.id}>
              <Task
                task={task}
                onChange={onChangeTask}
                onDelete={onDeleteTask}
              />
            </li>
          );
        })}
      </ul>
    </>
  );
}

/*
este Componente Task renderiza una tarea. Que contiene una tarea?
  - checkbox, label o texto, boton Editar, boton Borrar. 
    pero si se esta editando la tarea renderiza un input, boton Guardar, boton Borrar.

*/
function Task({ task, onChange, onDelete }) {
  // para renderizar el otro JSX cuando se esta editando se necesita un estado.
  // este estado indicara si se esta editando o no para mostrar distintos JSX.
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    // actualizamos el estado true por que esta editando.
    setIsEditing(true);
  }
  function handleGuardarClick() {
    // actualizamos el estado false por que ya no se esta editando.
    setIsEditing(false);
  }

  function handleDeleteClick() {
    // aqui llamamos a la propcontroladora de eventos que contiene la funcion controladora de eventos.
    // para eliminar una tarea de la lista.
    onDelete(task.id);
  }
  function handleChange(e) {
    // utiliza la propControladora de eventos que referencia a la funcion Controladora de eventos.
    onChange({ ...task, text: e.target.value });
  }

  // creamos una variable que se actualizara si se esta editando o no.
  let contenidoTarea;

  function handleCheckChange(e) {
    onChange({
      ...task,
      done: e.target.checked,
    });
  }

  // si se esta editando entonces actualiza la variable contenidoTarea con lo siguiente
  // un input que mostrara el texto anterior y poder escribir el nuevo y un boton para Guardarlo.
  if (isEditing) {
    contenidoTarea = (
      <>
        {/* el input se estara editando entonces lanza el evento onChange que llama a handleChange */}
        <input type="text" value={task.text} onChange={handleChange} />
        <button onClick={handleGuardarClick}>Guardar</button>
      </>
    );

    // de lo contrario no se esta editando por lo cual el contenidoTarea sera un texto y el boton Editar.
  } else {
    contenidoTarea = (
      <>
        {task.text}
        <button onClick={handleEditClick}>Editar</button>
      </>
    );
  }

  /*
    El Componente Task retornara el siguiente JSX: 
    (checkbox)(contenidoTarea)(botonBorrar)
  */
  return (
    <>
      <label>
        <input
          type="checkbox"
          checked={task.done}
          onChange={handleCheckChange}
        />
        {contenidoTarea}
        {/* al hacer click en el boton borrar se lanza el evento onClick */}
        <button onClick={handleDeleteClick}>Borrar</button>
      </label>
    </>
  );
}
