import { useState } from "react";

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

function Task({ task, onChange, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);

  let contenidoTarea;

  function handleEditClick() {
    setIsEditing(true);
  }
  function handleSaveClick() {
    setIsEditing(false);
  }

  function handleDeleteClick() {
    onDelete(task.id);
  }
  function handleChange(e) {
    onChange({ ...task, text: e.target.value });
  }

  function handleCheckChange(e) {
    onChange({
      ...task,
      done: e.target.checked,
    });
  }

  if (isEditing) {
    contenidoTarea = (
      <>
        <input type="text" value={task.text} onChange={handleChange} />
        <button onClick={handleSaveClick}>Guardar</button>
      </>
    );
  } else {
    contenidoTarea = (
      <>
        {task.text}
        <button onClick={handleEditClick}>Editar</button>
      </>
    );
  }

  return (
    <>
      <label>
        <input
          type="checkbox"
          checked={task.done}
          onChange={handleCheckChange}
        />
        {contenidoTarea}
        <button onClick={handleDeleteClick}>Borrar</button>
      </label>
    </>
  );
}
