/*
Si un Componente tiene varias actualizaciones de estado entonces
podemos utilizar un reducer este contendra toda la logica de actualizacion de estado 
fuera del Componente en una unica funcion.
*/

/*
Consolidar logica de estado con un reducer
Si un Componente crece se vuelve compleja la manera de ver como el Componente se actualiza.
*/
import { useState } from "react";
import { useReducer } from "react";
import tasksReducer from "./reducerTask";

let nextId = 3;
const initialTasks = [
  { id: 0, text: "Visitar el Museo Kafka", done: true },
  { id: 1, text: "Ver espectáculo de títeres", done: false },
  { id: 2, text: "Foto del muro de Lennon", done: false },
];

export default function TaskApp() {
  //const [tasks, setTasks] = useState(initialTasks);

  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

  function handleAddTask(text) {
    dispatch({
      type: "added",
      id: nextId++,
      text: text,
    });

    // setTasks([
    //   ...tasks,
    //   {
    //     id: nextId++,
    //     text: text,
    //     done: false,
    //   },
    // ]);
  }

  function handleChangeTask(task) {
    dispatch({
      type: "changed",
      task: task,
    });

    // setTasks(
    //   tasks.map((t) => {
    //     if (t.id === task.id) {
    //       return task;
    //     } else {
    //       return t;
    //     }
    //   }),
    // );
  }

  function handleDeleteTask(taskId) {
    dispatch({
      type: "deleted",
      id: taskId,
    });

    // setTasks(tasks.filter((t) => t.id !== taskId));
  }

  return (
    <>
      <h1>Itinerario en Praga</h1>
      <AddTask onAddTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      />
    </>
  );
}

function AddTask({ onAddTask }) {
  const [text, setText] = useState("");
  return (
    <>
      <input
        placeholder="Agregar tarea"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={() => {
          setText("");
          onAddTask(text);
        }}
      >
        Agregar
      </button>
    </>
  );
}

function TaskList({ tasks, onChangeTask, onDeleteTask }) {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <Task task={task} onChange={onChangeTask} onDelete={onDeleteTask} />
        </li>
      ))}
    </ul>
  );
}

function Task({ task, onChange, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  let taskContent;
  if (isEditing) {
    taskContent = (
      <>
        <input
          value={task.text}
          onChange={(e) => {
            onChange({
              ...task,
              text: e.target.value,
            });
          }}
        />
        <button onClick={() => setIsEditing(false)}>Guardar</button>
      </>
    );
  } else {
    taskContent = (
      <>
        {task.text}
        <button onClick={() => setIsEditing(true)}>Editar</button>
      </>
    );
  }
  return (
    <label>
      <input
        type="checkbox"
        checked={task.done}
        onChange={(e) => {
          onChange({
            ...task,
            done: e.target.checked,
          });
        }}
      />
      {taskContent}
      <button onClick={() => onDelete(task.id)}>Borrar</button>
    </label>
  );
}
