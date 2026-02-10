import { useReducer } from "react";
import AddTask from "./AddTask";
import TaskList from "./TaskList";
import taskReducer from "./tasksReducer";

let nextId = 3;
const initialTasks = [
  { id: 0, text: "El Camino del Filósofo", done: true },
  { id: 1, text: "Visitar el templo", done: false },
  { id: 2, text: "Beber té matcha", done: false },
];

export default function App() {
  const [tasks, dispatch] = useReducer(taskReducer, initialTasks);

  return (
    <>
      <AddTask />
      <TaskList tasks={tasks} />
    </>
  );
}
