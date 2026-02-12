import { useReducer } from "react";
import { funcionReducer } from "./funcionReducer";

const initialTasks = [
  { id: 0, text: "El Camino del Filósofo", done: true },
  { id: 1, text: "Visitar el templo", done: false },
  { id: 2, text: "Beber té matcha", done: false },
];

export default function TaskApp() {
  const [tasks, dispatch] = useReducer(funcionReducer, initialTasks);

  return (
    <>
      <h1>TaskApp</h1>
      <AddTask />
      <TaskList />
    </>
  );
}
